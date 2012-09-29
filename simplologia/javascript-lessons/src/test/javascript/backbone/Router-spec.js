describe("Conceitos de um Router Backbone", function() {
	beforeEach(function() {
		this.router = new Roteador;
		this.routeSpy = sinon.spy();
		try {
			Backbone.history.start({
				silent : true,
				pushState : true
			});
		} catch (e) {
		}
		this.router.navigate("elsewhere");
	});
	
	afterEach(function(){
		this.router.navigate("");		
	})

	it("deve disparar a main page", function() {
		this.router.bind("route:index", this.routeSpy);
		this.router.navigate("", true);
		expect(this.routeSpy.called).toBeTruthy();
	});
	
	it("deve disparar uma lista de produtos por id", function() {
		this.router.bind("route:listar", this.routeSpy);
		this.router.navigate("produtos/12", true);
		expect(this.routeSpy.calledWith("12")).toBeTruthy();
	});
});