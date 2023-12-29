package com.bootcamp.Notas.API;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
public class NotasController {

    private final NotasRepository repository;

    public NotasController(NotasRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/notas")
    Notas nuevaNota(@RequestBody Notas nuevaNota)
    {
        return repository.save(nuevaNota);
    }


    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
    @GetMapping("/notas")
    List<Notas> notas()
    {
        return repository.findAll();
    }

    @GetMapping("/test")
    Notas nota()
    {
        Notas nuevanota =  new Notas(1L, "Ejemplo", "ejemplo");
        return repository.save(nuevanota);
    }
    @DeleteMapping("/notas/{notaId}")
    public void borrarNota(@PathVariable Long notaId)
    {
        boolean notaExiste = repository.existsById(notaId);
        if(!notaExiste) {
            throw new NoSuchElementException("Nota con id " + notaId + "no existe");
        }
        repository.deleteById(notaId);
    }
}
