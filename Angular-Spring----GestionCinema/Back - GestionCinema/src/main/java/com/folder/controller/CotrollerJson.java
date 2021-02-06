package com.folder.controller;

import com.folder.entities.Film;
import com.folder.entities.Ticket;
import com.folder.repository.FilmRepository;
import com.folder.repository.TicketRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController @CrossOrigin("*")
public class CotrollerJson {
    @Autowired
    private FilmRepository  filmRepository;
    @Autowired
    private TicketRepository  ticketRepository;

    @GetMapping(path="/imageFilm/{id}",produces= MediaType.IMAGE_JPEG_VALUE)
    @Transactional
    public byte[] image(@PathVariable(name="id")Long id) throws Exception {
        Film f=filmRepository.findById(id).get();
        String photoName=f.getPhoto();
        File file=new File(System.getProperty("user.home")+"/LocationImage/"+photoName);
        Path path= Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }
    @PostMapping("/payerTickets")
    public List<Ticket> payerTickets(@RequestBody TicketFrom ticketForm){
        List<Ticket> listTickets = new ArrayList<>();
         ticketForm.getTickets().forEach(idticket->{
            Ticket ticket = ticketRepository.findById(idticket).get();
            ticket.setNomClient(ticketForm.getNomClient());
            ticket.setReserve(true);
            ticket.setCodePayment(ticketForm.getCodePayement());
            ticketRepository.save(ticket);
            listTickets.add(ticket);
        });
         return listTickets;
    }
}
@Data
class TicketFrom{
    private String nomClient;
    private int codePayement;
    private List<Long> tickets = new ArrayList<>();
}
