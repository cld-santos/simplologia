window.Produto = Backbone.Model.extend({
	urlRoot:'api/produto',
	defaults:{
		id_pk: 0,
		nome: '',
		ingredientes:[],
		pontuacao: 0,
		preco: '',
		promocao: false,
		imagem:''
	}
});

window.Produtos = Backbone.Collection.extend({
	url: 'api/produto',
	model: Produto
});