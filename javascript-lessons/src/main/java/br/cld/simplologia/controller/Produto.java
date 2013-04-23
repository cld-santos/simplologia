package br.cld.simplologia.controller;

import java.util.ArrayList;
import java.util.List;

import br.cld.simplologia.DAO.ProdutosDAOImpl;
import br.cld.simplologia.model.ListaDeProdutos;

public class Produto {

	public List<br.cld.simplologia.model.Produto> obterListaDeProdutos() {

		List<br.cld.simplologia.model.Produto> listaProdutos = new ArrayList<br.cld.simplologia.model.Produto>();

		ProdutosDAOImpl produtos = new ProdutosDAOImpl();
		produtos.initializeConnection();
		listaProdutos = produtos.findAll();
		produtos.closeConnection();

		return listaProdutos;
	}


	public ListaDeProdutos obterListaDeProdutos(
			Integer pagina) {

		ListaDeProdutos listaDeProdutos = new ListaDeProdutos();

		ProdutosDAOImpl produtos = new ProdutosDAOImpl();
		produtos.initializeConnection();
		
		try {
			listaDeProdutos.setProdutos(produtos.findByPage(pagina));
			listaDeProdutos.setTotal(produtos.getTotal());
		} catch (Exception e) {
			
		} finally {
			produtos.closeConnection();
		}
		
		return listaDeProdutos;
	}

}
