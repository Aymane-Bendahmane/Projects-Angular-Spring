package com.folder.controller;

import com.folder.entities.*;
import com.folder.repository.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Controller
public class controller {
    @Autowired
    private FilmRepository filmRepository;
    @Autowired
    private CategoriesRepository categorieRepository ;
    @Autowired
    private SalleRepository salleRepository;
    @Autowired
    private SeanceRepository seanceRepository;
    @Autowired
    private ProjectionRepository projectionRepository;
    @Autowired
    private TicketRepository ticketRepository ;
    @Autowired
    private VilleRepository villeRepository ;
    @GetMapping(path = "/index")
    @Transactional
    String GetIndex(Model model,
                    @RequestParam (name = "page", defaultValue = "0")int page,
                    @RequestParam(name = "size",defaultValue = "5")int size,
                    @RequestParam(name = "keyword",defaultValue = "")String keyword)
    {
        Page<Film> pageFilm = filmRepository.findByTitreContains(keyword,PageRequest.of(page, size));
        model.addAttribute("films",pageFilm.getContent());
        model.addAttribute("pages",new int[pageFilm.getTotalPages()]);
        model.addAttribute("currentPage",pageFilm);
        return "index" ;
    }
   /* @GetMapping(path="/imageFilm/{id}",produces= MediaType.IMAGE_JPEG_VALUE)
    @Transactional
    public byte[] image(@PathVariable  (name="id")Long id) throws Exception {
        Film f=filmRepository.findById(id).get();
        String photoName=f.getPhoto();
        File file=new File(System.getProperty("user.home")+"/cinema/images/"+photoName);
        Path path= Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }*/
    @GetMapping(path = "/FilmAjouter")
    @Transactional
    String FilmAjouter(Model model){
        List<Categorie> categories  = categorieRepository.findAll();
        model.addAttribute("film",new Film()) ;
        model.addAttribute("categories",categories);
        return "FilmAjouter";
    }
    @PostMapping(path = "/SaveFilm")
    @Transactional
    String SaveFilm(@ModelAttribute Film film, @RequestParam("file") MultipartFile file, RedirectAttributes attributes)
    {
            // normalize the file path
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());

            // save the file on the local file system
            try {
                Path path = Paths.get(System.getProperty("user.home")+"/cinema/images/" + fileName);
                Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException e) {
                e.printStackTrace();
            }

        film.setPhoto(fileName);
        System.out.println(film.getId());
        filmRepository.save(film);
        return "redirect:/index";
    }

    @GetMapping(path = "/SupprimerFilm")
    String SupprimerFilm(Model model,Long id,@RequestParam (name = "page", defaultValue = "0")int page){
        filmRepository.deleteById(id);
        return "redirect:/index?page="+page;
    }

    @GetMapping(path = "ModifierFilm")
    String ModifierFilm(Model model,Long id){
        Film film = filmRepository.findById(id).get();
        List<Categorie> categories  = categorieRepository.findAll();
        model.addAttribute("film",film);
        model.addAttribute("categories",categories);
        return "FilmModifier" ;
    }
    @PostMapping(path = "/ModifiedFilm")
    String ModifiedFilm(@ModelAttribute Film film,Model model){
        System.out.println(film.getId());
        filmRepository.save(film);
        model.addAttribute("ModelAttribute",film);
        return "Validation";
    }
    @GetMapping(path = "/AjouterProjection")
    String AjouterProjection(Model model)
    {
        model.addAttribute("projection",new Projection());
        model.addAttribute("films",filmRepository.findAll());
        model.addAttribute("salles",salleRepository.findAll());
        model.addAttribute("seances",seanceRepository.findAll());
        model.addAttribute("villes",villeRepository.findAll());
        return "AjouterProjection";
    }
    @PostMapping(path = "/SaveProjection")
    String SaveProjection(@ModelAttribute Projection projection,@RequestParam (name = "page", defaultValue = "0")int page){
        projectionRepository.save(projection);
        System.out.println("*********************"+projection.getId());
        final  Projection projection1 = projectionRepository.findById(projection.getId()).get();
        Salle salle = salleRepository.findById(projection.getSalle().getId()).get();

        salle.getPlaces().forEach(place -> {
            Ticket ticket=new Ticket();
            ticket.setPlace(place);
            ticket.setPrix(projection1.getPrix());
            ticket.setProjection(projection1);
            ticket.setReserve(false);
            ticketRepository.save(ticket);
        });


        return "redirect:ConsulterProjection?page="+page;
    }

    @GetMapping(path = "/ConsulterProjection")
    String ConsulterProjection(Model model, @RequestParam (name = "page", defaultValue = "0")int page,
                               @RequestParam(name = "size",defaultValue = "50")int size,
                                @RequestParam(name = "keyword",defaultValue = "0")double keyword)
                               {
        Page<Projection> pageProjection = projectionRepository.findAll(PageRequest.of(page, size));
        model.addAttribute("projections",pageProjection.getContent());
        model.addAttribute("pages",new int[pageProjection.getTotalPages()]);
        model.addAttribute("currentPage",pageProjection);

        return "ConsulterProjection";
    }
    @GetMapping(path = "SupprimerProjection")
    String SupprimerProjection(Long id,int page)
    {
        System.out.println(page);
        projectionRepository.deleteById(id);
        return  "redirect:ConsulterProjection?page="+page;
    }
    @GetMapping(path = "/AfficherTickets")
    String AfficherTickets(Model model,Long id){
        List<Ticket> tickets = ticketRepository.GetTickets(id);
        tickets.forEach(p->{
            System.out.println(p.getPrix());
        });
        model.addAttribute("tickets",tickets);
        return "ConsulterTickets";
    }

}
