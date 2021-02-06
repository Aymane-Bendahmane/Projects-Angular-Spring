package com.folder.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.rest.core.config.Projection;

import javax.persistence.ManyToOne;

@Projection(name = "p2",types ={Ticket.class})
public interface ProjectionTik {
    public Long getId();
    public String getNomClient();
    public double getPrix() ;
    public int  getCodePayment();
    public boolean getReserve();
    public Place getPlace();
}
