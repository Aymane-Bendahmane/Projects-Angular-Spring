package com.folder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.folder.entities.Salle;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestController
@CrossOrigin("*")
public interface SalleRepository extends
JpaRepository<Salle,Long> {

}
