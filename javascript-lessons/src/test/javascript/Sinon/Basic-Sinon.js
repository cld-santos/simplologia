describe("Conceitos de Sinon",function(){
	var Episode = Backbone.Model.extend({

		foo : function(){
			this.title = 'ahuuu';
		}

	});
	
	it("deve monitorar o disparo de um método.", function(){
		var spy = sinon.spy();
		
		var episode = new Episode({title:"testes"});
		
		episode.bind("foo", spy);
		episode.trigger("foo");
		
		expect(spy.called).toBeTruthy();
	});

});


describe("Episode model", function() {
	var Episode = Backbone.Model.extend({
		  url: function() {
		    return "/episode/" + this.id;
		  }
	});
	
	  beforeEach(function() {
	    this.server = sinon.fakeServer.create();
	  });
	    
	  afterEach(function() {
	    this.server.restore();
	  });

	  it("should fire the change event", function() {
	    var callback = sinon.spy();
	    
	    this.server.respondWith("GET", "/episode/123",
	      [200, {"Content-Type": "application/json"},'{"id":123,"title":"Hollywood - Part 2"}']);

	    var episode = new Episode({id: 123});
	    
	    // Bind to the change event on the model
	    episode.bind('change', callback);
	    
	    // makes an ajax request to the server
	    episode.fetch(); 
	    
	    // Fake server responds to the request
	    this.server.respond(); 
	        
	    // Expect that the spy was called with the new model
	    expect(callback.called).toBeTruthy();
	    expect(callback.getCall(0).args[0].attributes)
	      .toEqual({id: 123,
	    	  		title: "Hollywood - Part 2"});
	    
	  });
	  
	  describe("Conceitos Sinon",function(){
			
			beforeEach(function(){
				sinon.spy(jQuery,"ajax");
			});

			afterEach(function(){
				jQuery.ajax.restore();
			});
			
			it("monitorar chamadas ao ajax",function(){
				jQuery.getJSON("/some/resource");
				expect(jQuery.ajax.calledOnce).toBeTruthy(); 
			});
			
		});

});

