describe("Utilização do Backbone via declaração no pom", function() {

	it("deve instanciar o objeto Model", function() {
		var user = new Usuario();
		user.autenticar();
		expect(user).not.toBeNull();
		expect(user.autenticado).toBeTruthy();

	});

	it("deve manter escopos de variaveis isoladas", function() {
		var userA = new Usuario();
		userA.usuario = 'claudio';
		var userB = new Usuario();
		userB.usuario = 'oidualc';

		expect(userA.usuario).not.toEqual(userB.usuario);
	});

	it("deve disparar o método $.ajax ao salvar.", function() {

		var userA = new Usuario();
		userA.usuario = 'claudio';

		spyOn($, 'ajax');

		userA.save();

		expect($.ajax).toHaveBeenCalled();

	});

	it("deve interceptar o método $.ajax ao salvar.", function() {
		var userA = new Usuario();
		userA.usuario = 'claudio';

		spyOn($, 'ajax').andCallFake(function() {
			userA.usuario = 'oidualc';
		});

		userA.save();

		expect($.ajax).toHaveBeenCalled();
		expect(userA.usuario).toEqual("oidualc");

	});
	
	it("deve disparar o método change ao alterar um atributo.",function(){
		var userA = new Usuario();
		userA.usuario = 'claudio';		
		spyOn($,'ajax');		
		userA.save();		
		expect($.ajax).toHaveBeenCalled();		
	});

	it("deve preencher as informações oriundas do servidor.", function() {
		var userA = new Usuario();
		userA.usuario = 'claudio';

		spyOn($, 'ajax').andCallFake(function() {
			userA.usuario = 'jonas';
			userA.cargo = 'tecnologia';
		});

		userA.fetch();

		expect($.ajax).toHaveBeenCalled();
		expect(userA.usuario).toEqual("jonas");
		expect(userA.cargo).toEqual("tecnologia");

	});

});
