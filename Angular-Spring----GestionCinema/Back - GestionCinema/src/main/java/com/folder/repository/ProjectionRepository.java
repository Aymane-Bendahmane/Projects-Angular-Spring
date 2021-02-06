package com.folder.repository;

import com.folder.entities.Film;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.folder.entities.Projection;
import org.springframework.data.jpa.repository.Temporal;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.TemporalType;
import java.util.Date;
@RepositoryRestController @CrossOrigin("*")
public interface ProjectionRepository extends
JpaRepository<Projection,Long> {
    public Page<Projection> findAll( Pageable pageable);
}
