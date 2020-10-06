package com.example.jonata.dematest.repository;

import java.util.List;

import com.example.jonata.dematest.model.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    
    List<Cliente> findByNome(String nome);

	List<Cliente> findByUsuario(Long id);  
}
