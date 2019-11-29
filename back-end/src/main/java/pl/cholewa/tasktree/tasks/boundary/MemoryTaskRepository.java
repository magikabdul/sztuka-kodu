package pl.cholewa.tasktree.tasks.boundary;

import org.springframework.stereotype.Component;
import pl.cholewa.tasktree.tasks.entity.Task;

import java.util.*;

@Component
public class MemoryTaskRepository implements TasksRepository {

    private final Set<Task> tasks = new HashSet<>();

    @Override
    public void add(Task task) {
        tasks.add(task);
    }

    @Override
    public void update(Long id, String title, String description) {
        findById(id).ifPresent(task -> {
            task.setTitle(title);
            task.setDescription(description);
        });
    }

    @Override
    public List<Task> fetchAll() {
        return new ArrayList<>(tasks);
    }

    @Override
    public Task fetchById(Long id) {
        return findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Task not found!!!"));
    }

    @Override
    public void deleteById(Long id) {
        findById(id).ifPresent(tasks::remove);
    }

    private Optional<Task> findById(Long id) {
        return tasks.stream()
                .filter(task -> id.equals(task.getId()))
                .findFirst();
    }
}
