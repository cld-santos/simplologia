window.Roteador = Backbone.Router.extend({

	routes : {
		"" : "index",
		"produtos/:id" : "listar"
	},
	index : function() {

		this.produto = new Produto();
		
		this.produto.fetch({
			data : {
				pagina : 1
			},
			processData : true,
			success : function() {
				$('#corpo').html(new ProdutosView({
					model : appRoteador.produto
				}).render().el);
			}
		});

	},

	listar : function(id) {

		this.produto = new Produto();

		this.produto.fetch({
			data : {
				pagina : id
			},
			processData : true,
			success : function() {
				$('#corpo').html(
						new ProdutosView({
							model : appRoteador.produto
						}).render().el
				);
			}
		});
	}
});