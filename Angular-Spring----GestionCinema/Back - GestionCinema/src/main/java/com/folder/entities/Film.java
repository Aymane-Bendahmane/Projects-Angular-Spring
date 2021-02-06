package com.folder.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Collection;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

@Entity 
@Data @NoArgsConstructor @AllArgsConstructor
public class Film implements Serializable{

	@Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	//@Size(min=2, max=40)
	private String titre;
	private double duree;
	private String realisateur;
	//@Size(min=0, max=300)
	private String description;
	private String photo;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateSortie;

	@OneToMany(mappedBy = "film")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private Collection<Projection> Projections;
	
	@ManyToOne
	private Categorie categorie;
	
}
