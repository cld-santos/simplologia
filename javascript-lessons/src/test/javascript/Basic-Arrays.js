describe("Conceitos Básicos de Arrays", function (){

	function Objetao(){
		
		var _cor="";
		
		this.ObterCor = function(){
			return _cor;
		}
		
		this.SetarCor = function(value){
			_cor = value;
		} 
	}
	
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

	it("deve criar uma lista de Objetos", function(){
		var colecao = new Array();
		
		for ( var int = 0; int < 10; int++) {
			var objeto = new Objetao();
			objeto.SetarCor("Amarelo "+int);
			colecao.push(objeto);
		};
		
		expect(colecao.length).toEqual(10);
		
		for ( var int = 0; int < 10; int++) {
			objeto.SetarCor("Amarelo " + int);
			expect(colecao[int].ObterCor()).toEqual("Amarelo " + int);			
		};		
		
	});
});
