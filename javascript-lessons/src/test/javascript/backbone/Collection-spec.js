describe("Conceitos de Backbone Collection",function(){
	it("deve armazenar uma série de usuarios",function (){
		var userA = new Usuario({usuario:"crelson", cargo:"futeboleiro", autenticado:false});
		var userB = new Usuario({usuario:"joaquim", cargo:"BichoGrilo", autenticado:false});
		var userC = new Usuario({usuario:"daniel", cargo:"popStar", autenticado:false});
		
		var users = new Usuarios([ userA, userB, userC]);
		
		expect(users.length).toEqual(3);
		var res = users.at(0);
		expect(res.get("cargo")).toEqual(userA.get("cargo"));

		var resAutenticado = users.at(1);
		resAutenticado.autenticar();
		expect(resAutenticado.autenticado).toBeTruthy();

	});
})