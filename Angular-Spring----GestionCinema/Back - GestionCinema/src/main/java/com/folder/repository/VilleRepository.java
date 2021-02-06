package com.folder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.folder.entities.Ville;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestController
@CrossOrigin("*")
public interface VilleRepository extends
JpaRepository<Ville,Long> {

}
