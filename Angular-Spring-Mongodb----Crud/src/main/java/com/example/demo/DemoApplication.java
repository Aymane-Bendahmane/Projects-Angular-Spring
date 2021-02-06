package com.example.demo;

import com.example.demo.Repository.TutorialRepository;
import com.example.demo.Services.TutorialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
    @Autowired
    TutorialService tutorialService;
    @Autowired
    TutorialRepository tutorialRepository ;
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        tutorialService.initTutorial();

        System.out.println(tutorialRepository.findAll());
    }
}
