
utils.carregarTemplate(['ProdutosItemView','ProdutosView'], function() {
	window.appRoteador = new Roteador();
	Backbone.history.start();
})