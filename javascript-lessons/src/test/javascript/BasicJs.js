describe("Conceitos Básicos de Javascript", function(){
	var CadeiaDeCaracteres;
	
	beforeEach(function (){
		 CadeiaDeCaracteres= 'teste teste';
	});
	
	it("deve armazenar uma cadeia de caracteres.",function(){
		
		expect(CadeiaDeCaracteres).toEqual('teste teste');
	});

	it("deve extrair três caracteres do meio de uma string." , function(){
		var tamanho = CadeiaDeCaracteres.length;
		var resultado = CadeiaDeCaracteres.substring((tamanho/2)-1,(tamanho/2)+2);
		
		expect(resultado).toEqual('e t');
	});

	it("deve obter um caracter de uma determinada posição inválida." , function(){
		var tamanho = CadeiaDeCaracteres.length;
		var resultado = CadeiaDeCaracteres.charAt(tamanho + 20);

		expect(resultado).toBe('');
	});
	
	it("deve obter um caracter de uma determinada posição válida." , function(){
		var tamanho = CadeiaDeCaracteres.length;
		var resultado = CadeiaDeCaracteres.charAt(tamanho -1);

		expect(resultado).toBe('e');
	});
	
	it("deve concatenar duas strings." , function(){
		var resultado = 'teste' + ' teste';

		expect(resultado).toEqual(CadeiaDeCaracteres);
	});
	
/*	it('has MSIE in its user agent string',function() {
		expect(navigator.userAgent).toContain("MSIE");
	});*/
	
});

