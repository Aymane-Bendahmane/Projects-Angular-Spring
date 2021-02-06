package com.example.demo.repository;

import com.example.demo.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@RepositoryRestController
@CrossOrigin(origins = "http://localhost:4200")
public interface CategorieRepository  extends JpaRepository<Categorie,Long> {


}
