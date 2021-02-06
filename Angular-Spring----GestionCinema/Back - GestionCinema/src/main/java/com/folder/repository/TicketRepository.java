package com.folder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.folder.entities.Ticket;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestController @CrossOrigin("*")
public interface TicketRepository extends
JpaRepository<Ticket,Long>{

    @Query(value = "SELECT t from Ticket t  WHERE  t.projection.id= :x")
     List<Ticket> GetTickets(@Param("x") Long id) ;

}
