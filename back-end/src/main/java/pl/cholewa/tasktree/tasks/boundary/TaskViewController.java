package pl.cholewa.tasktree.tasks.boundary;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pl.cholewa.tasktree.tasks.control.TasksService;

@Controller
@RequestMapping("/")
@RequiredArgsConstructor
@Slf4j
public class TaskViewController {

    private final TasksService tasksService;

    @GetMapping
    public String home(Model model) {
        model.addAttribute("tasks", tasksService.fetchAll());
        model.addAttribute("newTask", new CreateTaskRequest());
        return "home";
    }

    @PostMapping("tasks")
    public String addTask(@ModelAttribute("newTask") CreateTaskRequest request) {
        log.info("dodaje zadnie");
        tasksService.addTask(request.title, request.description);
        return "redirect:/";
    }

    @PostMapping("tasks/delete/{id}")
    public String removeTask(@PathVariable Long id) {
        log.info("usuwam zadnie o id: {}", id);
        tasksService.removeTask(id);
        return "redirect:/";
    }
}
