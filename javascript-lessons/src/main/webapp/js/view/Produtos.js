window.ProdutosView = Backbone.View.extend({

	id : 'ListaProduto',

	render : function() {

		var listaPrd = this.model.get('produtos');
		$(this.el).html(this.template());

		for ( var c = 0; c < listaPrd.length; c++) {
			$('.produtos', this.el).append(new ProdutosItemView({
				model : listaPrd[c],
				tplData : this.tplData
			}).render().el);
		}

		for ( var c = 1; c <= this.model.get('total'); c++) {
			$('.paginacao', this.el).append('<li id="ItemPaginacaoProduto"><a href="index.html#produtos/'+ c +'">'+c+'</a></li>');
		}
		
		return this;

	}

});

window.ProdutosItemView = Backbone.View.extend({

	id : 'ListaProdutoItem',

	tagName : 'li',

	render : function() {
		$(this.el).html(this.template(this.model));// .toJSON()
		return this;
	}

});
