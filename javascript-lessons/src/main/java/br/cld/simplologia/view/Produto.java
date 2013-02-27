
package br.cld.simplologia.view;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import br.cld.simplologia.model.ListaDeProdutos;


@Path("/produto")
public class Produto {
    

/*	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<br.cld.simplologia.model.Produto> obterListaDeProdutos() {
		br.cld.simplologia.controller.Produto produtos = new br.cld.simplologia.controller.Produto();
		return produtos.obterListaDeProdutos();
	}
*/
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ListaDeProdutos obterListaDeProdutos(@QueryParam("pagina") Integer pagina) {
		br.cld.simplologia.controller.Produto produtos = new br.cld.simplologia.controller.Produto();
		return produtos.obterListaDeProdutos(pagina);
	}
	
}