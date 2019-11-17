package pl.cholewa.tasktree.tasks;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "app.tasks")
@Component
public class TasksConfig {

    private String endpointMessage;

    public void setEndpointMessage(String endpointMessage) {
        this.endpointMessage = endpointMessage;
    }

    public String getEndpointMessage() {
        return endpointMessage;
    }
}
