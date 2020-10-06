package com.example.jonata.dematest.controller.form;

import com.example.jonata.dematest.model.Usuario;
import com.example.jonata.dematest.repository.UsuarioRepository;

public class UsuarioAtualizacaoForm {

    private String nome;    
    private String senha;


    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return this.senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

	public Usuario converter(){
        return new Usuario(nome, senha);
    }

	public Usuario atualizar(Long id, UsuarioRepository usuarioRepository) {
        Usuario usuario = usuarioRepository.getOne(id);
        usuario.setNome(this.nome);
        usuario.setSenha(this.senha);
		return usuario;
	}

}
