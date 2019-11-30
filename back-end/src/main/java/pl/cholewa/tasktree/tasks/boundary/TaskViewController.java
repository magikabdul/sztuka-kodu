package pl.cholewa.tasktree.tasks.boundary;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.cholewa.tasktree.tasks.control.TasksService;
import pl.cholewa.tasktree.tasks.entity.Task;

@Controller
@RequestMapping("/")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
public class TaskViewController {

    private final TasksService tasksService;
//    private final StorageService storageService;

    @GetMapping
    public String home(Model model) {
        model.addAttribute("tasks", tasksService.fetchAll());
        model.addAttribute("newTask", new CreateTaskRequest());
        return "home";
    }

    @PostMapping("tasks")
    public String addTask(@ModelAttribute("newTask") CreateTaskRequest request,
                          @RequestParam("attachment") MultipartFile attachment) {
        log.info("dodaje zadnie");
        Task task = tasksService.addTask(request.title, request.description);
//        if (!attachment.isEmpty())
//        storageService.saveFile(task.getId(), attachment);
        return "redirect:/";
    }

    @PostMapping("tasks/delete/{id}")
    public String removeTask(@PathVariable Long id) {
        log.info("usuwam zadnie o id: {}", id);
        tasksService.removeTask(id);
        return "redirect:/";
    }
}
