describe("Conceitos da integração entre Model e View",function(){
	
	it("Deve apresentar uma lista de produtos",function(){

		var prd1 = new Produto({id_pk:1, nome:"Xperia Mini", preco:300, pontuacao:5});
		var prd2 = new Produto({id_pk:1, nome:"Resistência", preco:25.60, pontuacao:5});
		var prd3 = new Produto({id_pk:2, nome:"Relogio", preco:650, pontuacao:5});

		var produtos = new Produtos([ prd1, prd2, prd3]);
		var listaPrd = new ProdutosView({model : produtos});
		
		expect(produtos.length).toEqual(listaPrd.model.models.length);
		
	});	
	
});