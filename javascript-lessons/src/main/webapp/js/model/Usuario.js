window.Usuario = Backbone.Model.extend({
	url : "/info/usuario",
	autenticar : function() {
		this.autenticado = true;
	}
}, {
	autenticado : false,
	usuario : '',
	cargo : ''
});


window.Usuarios = Backbone.Collection.extend({
    model: Usuario
});