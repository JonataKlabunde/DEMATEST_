package com.example.jonata.dematest.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.example.jonata.dematest.controller.dto.ClienteDto;
import com.example.jonata.dematest.controller.form.ClienteForm;
import com.example.jonata.dematest.model.Cliente;
import com.example.jonata.dematest.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/clientes")
public class ClienteController {


    @Autowired
    private ClienteRepository clienteRepository;


    @GetMapping
    public List<ClienteDto> lista(String dto) {        
        //** caso for passado usuario por parametro
        List<Cliente> clientes =  (dto == null) ? clienteRepository.findAll() : clienteRepository.findByNome(dto);
        return ClienteDto.converter(clientes);
    }

    @PostMapping
    @Transactional
    public ResponseEntity<ClienteDto> cadastrar(@RequestBody ClienteForm form, UriComponentsBuilder uriBuilder) {
        Cliente cliente = form.converter();
        clienteRepository.save(cliente);

        URI uri = uriBuilder.path("/usuarios/{id}").buildAndExpand(cliente.getId()).toUri();
        return ResponseEntity.created(uri).body(new ClienteDto(cliente));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ClienteDto> detalhar(@PathVariable Long id){    
        Optional<Cliente> optional = clienteRepository.findById(id);
        if (optional.isPresent()) {
            return ResponseEntity.ok( new ClienteDto(optional.get()));
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<ClienteDto> atualizar(@PathVariable Long id, @RequestBody ClienteForm form) {       

        System.out.println("ATUALIZANDO  "+id );


        Optional<Cliente> optional = clienteRepository.findById(id);
        if (optional.isPresent()) {
            Cliente cliente = form.atualizar(id, clienteRepository);
            return ResponseEntity.ok(new ClienteDto(cliente));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> remover(@PathVariable Long id) {
        Optional<Cliente> optional = clienteRepository.findById(id);
        if (optional.isPresent()) {
            clienteRepository.deleteById(id);        
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();        
    }

    
}
