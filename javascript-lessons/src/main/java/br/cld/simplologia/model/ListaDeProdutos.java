package br.cld.simplologia.model;

import java.util.ArrayList;
import java.util.List;

import br.cld.simplologia.model.Produto;

public class ListaDeProdutos {

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public List<Produto> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}

	public String getProximo() {
		return proximo;
	}

	public void setProximo(String proximo) {
		this.proximo = proximo;
	}

	public String getAnterior() {
		return anterior;
	}

	public void setAnterior(String anterior) {
		this.anterior = anterior;
	}

	private int total;
	private List<Produto> produtos = new ArrayList<Produto>();
	private String proximo;
	private String anterior;

}
