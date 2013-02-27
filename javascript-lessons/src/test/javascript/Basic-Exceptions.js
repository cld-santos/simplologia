describe("Conceitos de tratamento de Exceção",function(){
	
	function OtimistaError (mensagem) {
		this.name="OtimistaError";
		this.messagem = mensagem || "Erro padrão.";
	}
	
	OtimistaError.prototype = new Error();
	
	
	var excecao = function(){
		world.esfrie(2);
	};
	
	var excecaoTratada = function(){
		try{
			excecao();
		}
		catch(ex){
			if(ex instanceof ReferenceError){
				throw new ReferenceError("Referência à Objeto inexistente.");
			}
		}
	};
	
	var esfrieOPlaneta = function (graus){
		
		if (graus>0 && graus<5){
			return "Não existe aquecimento global mané!";
		}else{
			throw new OtimistaError("Além de Otimista é Ignorante.");
		}
	}
	
	it("Deve lançar exceção ao acessar uma propriedade nula", function(){

		expect(excecao).toThrow();
	});

	it("Deve tratar a exceção lançada", function(){
		var mensagem="";
		try{
			excecaoTratada();
		
		}catch(ex){
			mensagem = ex;
		}
		
		expect(mensagem.message).toBe("Referência à Objeto inexistente.");
	});

	it("Deve esperar uma exceção do tipo ReferenceError", function(){
		var mensagem="";
		try{
			excecaoTratada();
		}catch(ex){
			mensagem = ex;
		}
		
		expect(mensagem instanceof ReferenceError).toBeTruthy();
	});
	
	it("Lançamento de exceção customizada.", function(){
		var mensagem="";
		try{
			esfrieOPlaneta(20);
		}catch(ex){
			mensagem = ex;
		}
		
		expect(mensagem instanceof OtimistaError).toBeTruthy();
	});
	
});