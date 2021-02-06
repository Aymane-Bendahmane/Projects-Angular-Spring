package com.ecomerce.demo;

import com.ecomerce.demo.Entities.Category;
import com.ecomerce.demo.Entities.Product;
import com.ecomerce.demo.Repository.ProductRepository;
import com.ecomerce.demo.Service.EcomerceServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
    @Autowired
    EcomerceServiceImp ecomerceServiceImp ;
    @Autowired
    ProductRepository productRepository ;
    @Autowired
    RepositoryRestConfiguration repositoryRestConfiguration ;
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
       repositoryRestConfiguration.exposeIdsFor(Product.class, Category.class);
       /*
        ecomerceServiceImp.initCategory();
        ecomerceServiceImp.initProduct();
*/
        //System.out.println(productRepository.findAll());
    }
}
