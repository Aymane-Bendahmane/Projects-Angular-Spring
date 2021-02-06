package com.example.demo.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "p2",types ={Produit.class})
public interface projectionProduit {
     public Long getId();
     public String getName();
     public double getPrix();
     public Categorie getCategorie();
}
