package com.example.microservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "Java Microservice Dashboard");
        model.addAttribute("welcome", "Welcome to My Microservice");
        return "home";
    }
    
    @GetMapping("/dashboard")
    public String dashboard() {
        return "redirect:/";
    }
}
