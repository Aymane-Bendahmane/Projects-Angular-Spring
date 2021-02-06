package com.example.demo.Services;

import com.example.demo.Repository.TutorialRepository;
import com.example.demo.entities.Tutorial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class tutorialServicesImp implements TutorialService{
    @Autowired
    TutorialRepository tutorialRepository;
    @Override
    public void initTutorial() {
        tutorialRepository.save(new Tutorial(null,"Spring boot app","tut#dsfsdf",true));
        tutorialRepository.save(new Tutorial(null,"Reactjg","tut#dsfsdf",false));

        tutorialRepository.save(new Tutorial(null,"Nodejs","tut#dsfsdf",true));

        tutorialRepository.save(new Tutorial(null,"Angular","tut#dsfsdf",false));


    }
}
