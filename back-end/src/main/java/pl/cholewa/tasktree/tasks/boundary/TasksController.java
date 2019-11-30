package pl.cholewa.tasktree.tasks.boundary;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import pl.cholewa.tasktree.tasks.TasksConfig;
import pl.cholewa.tasktree.tasks.control.TasksService;
import pl.cholewa.tasktree.tasks.entity.Task;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping(path = "/api/tasks")
@CrossOrigin("*")
public class TasksController {

    private final TasksConfig config;
    private final TasksRepository repository;
    private final TasksService tasksService;

    public TasksController(TasksConfig config, TasksRepository repository, TasksService tasksService) {
        this.config = config;
        this.repository = repository;
        this.tasksService = tasksService;
    }

    @PostConstruct
    private void init() {
        tasksService.addTask("Test task", "Simple task description");
        tasksService.addTask("Backend", "Create Backend");
        tasksService.addTask("Frontend", "Build React Frontend");
    }

    @GetMapping
//    public List<TaskResponse> getTasks(@RequestParam(required = false) String filter) {
    public List<TaskResponse> getTasks(@RequestParam Optional<String> query) {
        log.info("This is query: {}" , query);
        return query.map(tasksService::filterAllByQuery)
                .orElseGet(tasksService::fetchAll)
                .stream()
                .map(this::toTaskResponse)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public TaskResponse getTask(@PathVariable Long id) {
        log.info("Fetching task by id: {}", id);
        return toTaskResponse(repository.fetchById(id));

    }

    @PostMapping
    public void addTask(@RequestBody CreateTaskRequest task) {
        log.info("Storing new task: {}", task);
        tasksService.addTask(task.title, task.description);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        log.info("Deleting a task with id: {}", id);
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    public void updateTask(@PathVariable Long id, @RequestBody UpdateTaskRequest request) {
        tasksService.updateTask(id, request.title, request.description);
    }

    private TaskResponse toTaskResponse(Task task) {
        return new TaskResponse(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getCreatedAt()
        );
    }
}
