package com.folder.repository;

import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.folder.entities.Film;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestController @CrossOrigin("*")
public interface FilmRepository extends
JpaRepository<Film,Long> {

    @Query("select  p from Film p where p.id = :x")
    public List<Film> getfilmbytitre(@Param("x")int id);

    public Page<Film> findByTitreContains(String keyword, Pageable pageable);
}
