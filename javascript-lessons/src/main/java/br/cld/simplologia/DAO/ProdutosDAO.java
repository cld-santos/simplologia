package br.cld.simplologia.DAO;

import java.util.List;
import br.cld.simplologia.model.Produto;

public interface ProdutosDAO {

	public boolean initializeConnection();

	public boolean closeConnection();

	public boolean save(Produto produto);

	public boolean delete(Produto produto);

	public List<Produto> findAll();

	public List<Produto> findById(Integer id);

	public List<Produto> findByPage(Integer page);

	public List<Produto> findGeneric(String value);

}
