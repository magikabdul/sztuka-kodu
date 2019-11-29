package pl.cholewa.tasktree.tasks.boundary;

import pl.cholewa.tasktree.tasks.entity.Task;

import java.util.List;

public interface TasksRepository {

    void add(Task task);

    List<Task> fetchAll();

    Task fetchById(Long id);

    void deleteById(Long id);

    void update(Long id, String title, String description);
}
