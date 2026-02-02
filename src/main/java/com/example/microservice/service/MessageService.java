package com.example.microservice.service;

import com.example.microservice.model.Message;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class MessageService {
    
    private final List<Message> messages = new ArrayList<>();
    private Long nextId = 1L;
    
    public Message createMessage(String text) {
        Message message = new Message();
        message.setId(nextId++);
        message.setText(text);
        message.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        messages.add(message);
        return message;
    }
    
    public List<Message> getAllMessages() {
        return new ArrayList<>(messages);
    }
    
    public Message getMessageById(Long id) {
        return messages.stream()
                .filter(m -> m.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
    
    public String getServerInfo() {
        return "Microservice v1.0.0 | Server Time: " + 
               LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}
