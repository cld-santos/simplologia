
define(['jquery','underscore','backbone','view/MapView'], 
		function( $, _, Backbone, MapView) {
	var router;
	return router = Backbone.Router.extend({
	
		routes : {
			"" : "index",
			"produtos/:id" : "listar"
		},
	
		index : function() {
			var mapa = new MapView();
			$('#corpo').html(mapa.render());
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

});