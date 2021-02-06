package com.example.demo.repository;

import com.example.demo.entities.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;



@RepositoryRestController
@CrossOrigin(origins = "http://localhost:4200")
public interface ProduitRepository extends JpaRepository<Produit,Long> {

    @RestResource(path = "/findByName")
    Page<Produit> findByNameContains(@Param("mc")String name, Pageable pageable);

}
