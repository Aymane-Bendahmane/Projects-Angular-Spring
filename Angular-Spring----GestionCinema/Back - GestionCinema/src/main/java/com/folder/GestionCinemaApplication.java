package com.folder;

import com.folder.entities.Film;
import com.folder.entities.Salle;
import com.folder.entities.Ticket;
import com.folder.servcies.ICinemaInitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class GestionCinemaApplication implements CommandLineRunner {
	@Autowired  private ICinemaInitService cinemaInitService;
	@Autowired private RepositoryRestConfiguration repositoryRestConfiguration ;
	public static void main(String[] args) {

		SpringApplication.run(GestionCinemaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfiguration.exposeIdsFor(Film.class, Ticket.class);
		repositoryRestConfiguration.exposeIdsFor(Salle.class);
	/*	cinemaInitService.initVilles();
		cinemaInitService.initCinemas();
		cinemaInitService.initSalles();
		cinemaInitService.initPalces();
		cinemaInitService.initSeances();
		cinemaInitService.initCategories();
		cinemaInitService.initFilms();
		cinemaInitService.initProjections();
		cinemaInitService.initTickets();*/
	}
}
