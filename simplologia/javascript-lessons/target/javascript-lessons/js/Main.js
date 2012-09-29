
window.Roteador = Backbone.Router.extend({
	
	routes : {
		
		"" : "index",
		"produtos/:id" : "listar"
			
	},
	
	index : function() {
		
		this.produtos = new Produtos();
		
		this.produtos.fetch({
			data: { pagina: 1}, 
		    processData: true, 
			success: function(){
						$('#corpo').html(new ProdutosView({model : appRoteador.produtos.at(0).get("produtos")}).render().el);
					 } 
		});
		
	},
	
	listar: function(id){
		
		this.produtos = new Produtos();
		
		this.produtos.fetch({
			data: { pagina: id},
		    processData: true, 
			success: function(){
						$('#corpo').html(new ProdutosView({model : appRoteador.produtos.at(0).get("produtos")}).render().el);
					 } 
		});
	}
});

window.tplData = '';

var str_template = $.get("./tpl/Produtos.htm");

str_template.complete(function(){

	window.tplData = str_template.responseText;
	window.appRoteador = new Roteador();
	Backbone.history.start();
	
});
