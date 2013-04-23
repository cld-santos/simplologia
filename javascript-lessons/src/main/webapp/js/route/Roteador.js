define(['jquery','underscore','backbone','view/MapView'], 
		function( $, _, Backbone, MapView) {
	var router;
	return router = Backbone.Router.extend({
		routes : {
			"" : "index",
			"produtos/:id" : "listar",
			"area/:nomeDaArea" : "zoomNaArea"
		},
	
		index : function() {
			if(!window.mapa){
				window.mapa = new MapView();
			}
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
		},		
		zoomNaArea: function(nomeDaArea){
			nomeDaArea = nomeDaArea.replace('-',' ');
			if(!window.mapa){
				this.index();
			}
			
			dojo.connect(window.map,"onUpdateEnd",window.mapa.zoomPorArea(nomeDaArea));
						
		}
	});
});