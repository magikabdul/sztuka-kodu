package pl.cholewa.tasktree.tasks.boundary;

import org.springframework.data.repository.CrudRepository;
import pl.cholewa.tasktree.tasks.entity.Task;

public interface TaskCrudRepository extends CrudRepository<Task, Long> {

}
