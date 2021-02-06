package com.folder.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity 
@Data @NoArgsConstructor @AllArgsConstructor
public class Ville implements Serializable{
	@Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	private String name;
	private Double longitude ;
	private Double latitude ;
	private Double altitude ;
	
	@OneToMany(mappedBy = "ville")
	private Collection<Cinema> cinemas ;
	
	
}
