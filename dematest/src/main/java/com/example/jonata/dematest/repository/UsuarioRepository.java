package com.example.jonata.dematest.repository;

import java.util.List;

import com.example.jonata.dematest.model.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
    List<Usuario> findByNome(String nome);
}
