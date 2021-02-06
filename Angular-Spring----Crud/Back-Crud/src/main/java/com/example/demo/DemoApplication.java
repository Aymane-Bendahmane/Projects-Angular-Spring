package com.example.demo;

import com.example.demo.entities.Categorie;
import com.example.demo.entities.Produit;
import com.example.demo.repository.CategorieRepository;
import com.example.demo.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Random;
import java.util.stream.Stream;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration ;
    @Autowired
    public ProduitRepository produitRepository;
    @Autowired
    public CategorieRepository categorieRepository;
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        repositoryRestConfiguration.exposeIdsFor(Categorie.class, Produit.class);
        /*
        Random random = new Random();
        Categorie electronique = new Categorie(null,"Electronique");
        Categorie alimentation = new Categorie(null,"alimentation");
        Categorie plastique = new Categorie(null,"plastique");
        categorieRepository.save(electronique);
        categorieRepository.save(alimentation);
        categorieRepository.save(plastique);

        Stream.of("Acer 2020","Acer 2019","HP Omen","Lenovo Legeion","Tfu 2020","DELL LATTITUD","Asus ROG","Asus G14 2020","MSI G15","MSI K23",
                "Huwei D14","Huwei D15","Hp Pro book","Hp Envy 2019","Hp Spectre","Dell XPS 13","Dell XPS 17").forEach(pc ->{

            produitRepository.save(new Produit(null,pc, random.nextInt(10000-5000+1)+5000, electronique));

        });
        */

    }
}
