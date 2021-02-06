package com.ecomerce.demo.Service;

import com.ecomerce.demo.Entities.Category;
import com.ecomerce.demo.Entities.Product;
import com.ecomerce.demo.Repository.CategoryRepository;
import com.ecomerce.demo.Repository.ProductRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Random;

@Service
@Transactional
public class EcomerceServiceImp implements EcomerceService{
    @Autowired
    CategoryRepository categoryRepository ;
    @Autowired
    ProductRepository productRepository ;
    @Override
    public void initCategory() {
        Category c1 = new Category(null,"Computers",null,null,null);
        Category c2 = new Category(null,"Printers",null,null,null);
        Category c3 = new Category(null,"Smart Phones",null,null,null);
        categoryRepository.save(c1);
        categoryRepository.save(c3);
        categoryRepository.save(c2);


    }

    @Override
    public void initProduct() {
        Random random = new Random();
        categoryRepository.findAll().forEach( data ->{
            for (int i = 0 ;i<=10;i++){
                Product product = new Product();
                product.setName(RandomString.make(18));
                product.setDescription(RandomString.make(30));
                product.setCurrent_price(100 + random.nextInt(1000));
                product.setPromotion(random.nextBoolean());
                product.setSelected(random.nextBoolean());
                product.setCategory(data);
                product.setPhotoName("unknown.PNG");
                productRepository.save(product);
            }

        });

    }
}
