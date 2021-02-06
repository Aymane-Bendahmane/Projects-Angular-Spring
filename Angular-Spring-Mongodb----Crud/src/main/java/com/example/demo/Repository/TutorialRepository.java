package com.example.demo.Repository;

import com.example.demo.entities.Tutorial;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface TutorialRepository extends MongoRepository<Tutorial,String> {
    List<Tutorial> findByTitleContaining(String title);
    List<Tutorial> findByPublished(boolean published);

}
