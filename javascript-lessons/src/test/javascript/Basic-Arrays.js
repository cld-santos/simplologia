describe("Conceitos Básicos de Arrays", function (){
	var lista = [1,2,3,4,5,6,7,8,9];

	it("deve armazenar uma lista de valores crescente.", function(){
		var res=true;
		for (var c=0; c < lista.lenght-1; c++){
			if(res){
				res = lista[c]>lista[c+1];
			}
		}
		expect(res).toBeTruthy();
	});
	
	it("deve adicionar um novo valor.", function(){
		lista.push("novo");
		
		expect(lista).toContain("novo");
	});


	it("deve remover um valor.", function(){
		lista.pop();
		expect(lista).not.toContain("novo");
	});

	it("deve ordenar uma lista de valores", function(){
		var listaDesordenada = new Array();
		listaDesordenada = [9,4,5,6,2,3,8,1,7];
		listaDesordenada.sort();
		expect(listaDesordenada.toString()).toEqual(lista.toString());		
	});
	
});