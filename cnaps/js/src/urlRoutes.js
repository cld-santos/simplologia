define(["backbone", "filter/main", "notes/main"],
	function(Backbone, pFilter, pNotes){
		return Backbone.Router.extend({
			routes : {
				'notes/:user':'byUser',
				'notes/:user(/:context)':'byUserContext'
			},
			byUser: function(user){
		        window.filters = new pFilter('#topo',user);
		        window.filters.render();

		        window.notes = new pNotes("#corpo", user, null);
		        window.notes.renderByUser();
			},
			byUserContext: function(user, context){
		        window.filters = new pFilter('#topo', user);
		        window.filters.render();

		        window.notes = new pNotes("#corpo", user, context);
		        window.notes.renderByUserContext();
			}
		});
	}
);