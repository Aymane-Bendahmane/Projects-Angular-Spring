package com.ecomerce.demo.Repository;

import com.ecomerce.demo.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin(origins = "*")
@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product,Long> {
    @RestResource(path = "/selectedProducts")
    public List<Product> findBySelectedIsTrue();

    @RestResource(path = "/findByKeyword")
    public List<Product> findByNameContains(@Param("mc") String keyword);

    @RestResource(path = "/promotion")
    public List<Product> findByPromotionIsTrue();

    @RestResource(path = "/disponible")
    public List<Product> findByAvailableIsTrue();

}
