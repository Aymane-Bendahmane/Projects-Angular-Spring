package com.ecomerce.demo.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description ;
    private double current_price;
    private boolean promotion;
    private boolean selected ;
    private  boolean available ;
    private String photoName ;
    @Transient
    private Integer quantity =1;
    @ManyToOne
    private Category category ;
}
