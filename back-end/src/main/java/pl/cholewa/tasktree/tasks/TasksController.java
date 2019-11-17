package pl.cholewa.tasktree.tasks;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/tasks")
public class TasksController {

    private final TasksConfig config;
    private final TasksRepository repository;

    public TasksController(TasksConfig config, TasksRepository repository) {
        this.config = config;
        this.repository = repository;
    }

    @GetMapping
    public List<Task> getTasks() {

        return repository.fetchAll();
    }

    @PostMapping
    public void addTask(@RequestBody Task task) {
        repository.add(task);
    }
}
