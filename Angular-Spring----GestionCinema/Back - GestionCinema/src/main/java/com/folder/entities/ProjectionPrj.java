package com.folder.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.Collection;
import java.util.Date;

@Projection(name = "p1",types = {com.folder.entities.Projection.class})
public interface ProjectionPrj {
    public Long getid();
    public double getprix();
    public Date getdateProjection();
    public Salle getsalle();
    public Film getfilm() ;
    public Seance getseance();
    public Collection<Ticket> gettickets();

}
