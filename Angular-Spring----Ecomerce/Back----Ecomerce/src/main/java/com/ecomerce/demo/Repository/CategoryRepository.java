package com.ecomerce.demo.Repository;

import com.ecomerce.demo.Entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RepositoryRestResource
public interface CategoryRepository extends JpaRepository<Category,Long> {
}
