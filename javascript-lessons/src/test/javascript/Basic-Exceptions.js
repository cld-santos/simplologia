describe("Conceitos de tratamento de Exce��o",function(){
	
	function OtimistaError (mensagem) {
		this.name="OtimistaError";
		this.messagem = mensagem || "Erro padr�o.";
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
				throw new ReferenceError("Refer�ncia � Objeto inexistente.");
			}
		}
	};
	
	var esfrieOPlaneta = function (graus){
		
		if (graus>0 && graus<5){
			return "N�o existe aquecimento global man�!";
		}else{
			throw new OtimistaError("Al�m de Otimista � Ignorante.");
		}
	}
	
	it("Deve lan�ar exce��o ao acessar uma propriedade nula", function(){

		expect(excecao).toThrow();
	});

	it("Deve tratar a exce��o lan�ada", function(){
		var mensagem="";
		try{
			excecaoTratada();
		
		}catch(ex){
			mensagem = ex;
		}
		
		expect(mensagem.message).toBe("Refer�ncia � Objeto inexistente.");
	});

	it("Deve esperar uma exce��o do tipo ReferenceError", function(){
		var mensagem="";
		try{
			excecaoTratada();
		}catch(ex){
			mensagem = ex;
		}
		
		expect(mensagem instanceof ReferenceError).toBeTruthy();
	});
	
	it("Lan�amento de exce��o customizada.", function(){
		var mensagem="";
		try{
			esfrieOPlaneta(20);
		}catch(ex){
			mensagem = ex;
		}
		
		expect(mensagem instanceof OtimistaError).toBeTruthy();
	});
	
});