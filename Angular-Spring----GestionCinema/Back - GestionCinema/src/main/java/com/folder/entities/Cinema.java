package com.folder.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity 
@Data @NoArgsConstructor @AllArgsConstructor
public class Cinema implements Serializable{

	@Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	private String name;
	private Double longitude ;
	private Double latitude ;
	private Double altitude ;
	private int nombreSalles ;
	
	@ManyToOne
	private Ville ville ;
	
	@OneToMany(mappedBy = "cinema")
	private Collection<Salle> salles ;
}
