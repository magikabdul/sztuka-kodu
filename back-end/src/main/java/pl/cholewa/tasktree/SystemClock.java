package pl.cholewa.tasktree;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class SystemClock implements Clock {
    @Override
    public LocalDateTime time() {
        return LocalDateTime.now();
    }
}
