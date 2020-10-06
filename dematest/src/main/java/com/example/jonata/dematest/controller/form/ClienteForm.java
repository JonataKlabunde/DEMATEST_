package com.example.jonata.dematest.controller.form;

import com.example.jonata.dematest.model.Cliente;
import com.example.jonata.dematest.repository.ClienteRepository;

public class ClienteForm {

    private String nome;
    private String cpf;
    private String telefone;
    private String observacao;
    private String endereco;
    private String usuario;

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return this.telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getObservacao() {
        return this.observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public String getEndereco() {
        return this.endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getUsuario() {
        return this.usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    
    public Cliente converter(){
        return new Cliente(nome, cpf, telefone, observacao, endereco, usuario);
    }

    public Cliente atualizar(Long id, ClienteRepository clienteRepository) {
        Cliente cliente = clienteRepository.getOne(id);
        cliente.setNome(this.nome);
        cliente.setCpf(this.cpf);
        cliente.setTelefone(this.telefone);
        cliente.setObservacao(this.observacao);
        cliente.setEndereco(this.endereco);
        cliente.setUsuario(this.usuario);
		return cliente;
	}
}
