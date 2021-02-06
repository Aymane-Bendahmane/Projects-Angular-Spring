package com.ecomerce.demo.controller;

import com.ecomerce.demo.Entities.Product;
import com.ecomerce.demo.Repository.ProductRepository;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@CrossOrigin(origins = "*")
public class controler {
    public ProductRepository productRepository;

    public controler(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping(path = "/photoProduct/{id}", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getPhoto(@PathVariable("id") Long id) throws IOException {
        //System.out.println(id);
        //System.out.println("+++++++++"+Paths.get(System.getProperty("User.home")));
        Product product = productRepository.findById(id).get();
        return Files.readAllBytes(Paths.get(System.getProperty("user.home") + "/Ecomerce/products/" + product.getPhotoName()));

    }
    @PostMapping(path = "/uploadPhoto/{id}")
    public void uploadPhoto(MultipartFile file,@PathVariable Long id) throws IOException {
        Product product = productRepository.findById(id).get();
        product.setPhotoName(id+"__"+file.getOriginalFilename());
        Files.write(Paths.get(System.getProperty("user.home") + "/Ecomerce/products/" + product.getPhotoName()),file.getBytes()) ;
        productRepository.save(product);
    }
}
