package br.cld.simplologia.model;

public class Produto {
	
	public Produto() {
		this.id_pk = -1;
		this.nome = "";
		this.pontuacao = 0;
		this.preco = 0d;
		this.promocao = false;

	}

	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getId_pk() {
		return id_pk;
	}
	public void setId_pk(Integer id_pk) {
		this.id_pk = id_pk;
	}
	public Double getPreco() {
		return preco;
	}
	public void setPreco(Double preco) {
		this.preco = preco;
	}
	public Boolean getPromocao() {
		return promocao;
	}
	public void setPromocao(Boolean promocao) {
		this.promocao = promocao;
	}
	public Integer getPontuacao() {
		return pontuacao;
	}
	public void setPontuacao(Integer pontuacao) {
		this.pontuacao = pontuacao;
	}

	private String nome;
	private Integer id_pk;
	private Double preco;
	private Boolean promocao;
	private Integer pontuacao;
	
}