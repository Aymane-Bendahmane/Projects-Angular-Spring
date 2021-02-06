package com.folder.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Collection;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

@Entity 
@Data @NoArgsConstructor @AllArgsConstructor
public class Projection  implements Serializable{

	@Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateProjection;
	private double prix ;
	
	@ManyToOne
	private Salle salle;
	
	@ManyToOne
	private Film film ;
	
	@OneToMany(mappedBy = "projection")
	private Collection<Ticket> tickets;
	
	@ManyToOne
	private Seance seance;
}
