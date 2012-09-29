package br.cld.simplologia.DAO;

import java.util.ArrayList;
import java.util.List;
import br.cld.simplologia.model.Produto;
import java.sql.*;

public class ProdutosDAOImpl implements ProdutosDAO {

	private Connection conexao;

	@Override
	public boolean save(Produto produto) {
		return false;
	}

	@Override
	public boolean delete(Produto produto) {
		return false;
	}

	@Override
	public List<Produto> findAll() {

		ArrayList<Produto> listaProdutos = new ArrayList<Produto>();

		String scriptSQL = "SELECT * FROM PRODUTOS";
		Statement executor;
		ResultSet res;

		try {

			executor = conexao.createStatement();
			res = executor.executeQuery(scriptSQL);

			while (res.next()) {
				Produto item = new Produto();
				item.setId_pk(res.getInt("ID_PK"));
				item.setNome(res.getString("NOME"));
				item.setPreco(res.getDouble("PRECO_UNITARIO"));
				listaProdutos.add(item);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return listaProdutos;
	}

	@Override
	public List<Produto> findById(Integer id) {

		return null;
	}

	@Override
	public List<Produto> findByPage(Integer page) {

		ArrayList<Produto> listaProdutos = new ArrayList<Produto>();

		String scriptSQL = "select * from ( select row_number() over (order by id_pk) RN, "
				+ "ID_PK, NOME, PRECO_UNITARIO, INGREDIENTES, DESCRICAO "
				+ "from produtos) " + "where rn between ? and ?";
		PreparedStatement executor;
		ResultSet res;

		try {

			executor = conexao.prepareStatement(scriptSQL);

			executor.setInt(1, (page * 9) - 8);
			executor.setInt(2, (page * 9));

			res = executor.executeQuery();

			while (res.next()) {
				Produto item = new Produto();
				item.setId_pk(res.getInt("ID_PK"));
				item.setNome(res.getString("NOME"));
				item.setPreco(res.getDouble("PRECO_UNITARIO"));
				listaProdutos.add(item);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return listaProdutos;
	}
	
	public int getTotal() {
		Statement executor; 
		ResultSet res;
		int total=0;

		try {

			executor = conexao.createStatement();

			res = executor.executeQuery("select count(id_pk) total from produtos");

			while (res.next()) {
				total = res.getInt("total");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return total/9;
	}


	@Override
	public List<Produto> findGeneric(String value) {
		return null;
	}

	@Override
	public boolean initializeConnection() {

		try {
			String driverName = "oracle.jdbc.driver.OracleDriver";
			Class.forName(driverName);

			String url = "jdbc:oracle:thin:@localhost:1521:XE";
			String username = "xfood";
			String password = "xfood";

			Class.forName("oracle.jdbc.driver.OracleDriver");
			conexao = DriverManager.getConnection(url, username, password);

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return false;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}

	@Override
	public boolean closeConnection() {
		try {
			this.conexao.close();
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}


}
