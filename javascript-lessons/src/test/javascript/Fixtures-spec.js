describe("Conceitos de fixtures", function() {
	jasmine.getFixtures().fixturesPath = '../javascript-lessons/tpl/';

	SearchView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        
        render: function(){
            var template = _.template($("#search_template").html(), {} );
            this.$el.html(template);
            return this;
        },
        
        events: {
            "click #search_button": "doSearch",
            "click #cancel_button": "doCancel"
        },
        
        doSearch: function( event ){
            return "Search for " + $("#search_input");
        },
        
        doCancel: function( event ){
            return "Search for " + $("#search_input");
        },
        
        cancela: function(){
        	return "cancelou a navegação";
        }
    });

	it("deve monitorar os eventos disparados ao clicar num div", function() {
		loadFixtures("Usuario.tpl");

		var search_view = new SearchView({ el: $("#search_container") });
		
		var spyEvent = spyOnEvent($("#search_container"), "click");
		$("#search_container").trigger("click");
		expect('click').toHaveBeenTriggeredOn($("#search_container"));

		expect(spyEvent).toHaveBeenTriggered();
		expect($("#search_template")).toExist();
		expect($("#search_container")).toExist();
		
	});
	
	it("deve monitorar os eventos disparados ao clicar num botão", function() {
		loadFixtures("Usuario.tpl");

		var search_view = new SearchView({ el: $("#search_container") });
		
		var spyEvent = spyOnEvent($("#search_input"), "click");
		
		$("#search_input").trigger("click");
		
		expect('click').toHaveBeenTriggeredOn($("#search_input"));
		expect(spyEvent).toHaveBeenTriggered();
		expect($("#search_template")).toExist();
		expect($("#search_container")).toExist();
		
	});

	it("deve interceptar os eventos de click em search disparados na view", function() {
		loadFixtures("Usuario.tpl");

		var search_view = new SearchView();
		var botao = search_view.$("#search_button");
		
		spyOn(search_view,'doSearch');
		search_view.delegateEvents();
		botao.click();
		
		expect(search_view.doSearch).toHaveBeenCalled();
	});
	
	it("deve interceptar os eventos de click em cancel disparados na view", function() {
		loadFixtures("Usuario.tpl");

		var search_view = new SearchView();
		var cancelBtn = search_view.$("#cancel_button");
		
		spyOn(search_view,'doCancel');
		search_view.delegateEvents();
		cancelBtn.click();
		
		expect(search_view.doCancel).toHaveBeenCalled();
	});
});