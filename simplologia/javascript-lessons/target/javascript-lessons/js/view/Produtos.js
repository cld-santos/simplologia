window.ProdutosView = Backbone.View.extend({
	
	id:'ListaProduto',
	
	render: function(){
		
		var listaPrd = this.model;//.models;
		$(this.el).html('<ul class="produtos"></ul>');
		
		for(var c=0; c< listaPrd.length;c++){
			$('.produtos',this.el).append(new ProdutosItemView({model:listaPrd[c], tplData:this.tplData}).render().el);			
		}
		
		return this;
		
	}

});

window.ProdutosItemView = Backbone.View.extend({
	
	id:'ListaProdutoItem',
	
	tagName: 'li',
	
	render: function(){		
		$(this.el).html(_.template(window.tplData, this.model));//.toJSON()
		return this;		
	}

});