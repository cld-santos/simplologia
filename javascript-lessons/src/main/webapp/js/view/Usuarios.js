window.UsuarioView = Backbone.View.extend({

	events:{
		"chamadaInicial":"abrir",
		"chamadaFinal":"fechar"
	},
	
	abrir : function(){
		return "abrir";
	},
	
	fechar : function(){
		return "fechar";
	},
	
	reder:function(){
		this.el = "renderizar";
		return this;
	}

});