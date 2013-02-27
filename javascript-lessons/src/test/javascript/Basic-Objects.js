describe("Conceitos Basicos de Orientação a Objetos em Javascript", function(){
	
	/* Notem que os construtores em js são os descritores de uma classe 
	 * As classes são iniciadas como se declarassemos uma function. 
	 * Algo que pode trazer alguns mau entendidos mas é a forma dinamica em que o js 
	 * fornece aos programadores para desenvolver.*/
	
	function Automovel() {
		
		this.velocidade = 10;
		
		this.acelera = function(nivel) {
			this.velocidade *= nivel;		
		}
		
		this.desacelera = function() {
			this.velocidade -= 10;		
		}
	};
	
	function Trator() {
		
		this.acelera = function(nivel){
			this.velocidade *= (nivel/2);
		}
	}
	

	
	it("deve esperar que um comportamento seja executado.",function(){

		automovel = new Automovel();
		spyOn(automovel,'acelera');
		
		automovel.acelera(2);
		automovel.desacelera();
		automovel.acelera(5);
		automovel.desacelera();
		automovel.desacelera();
		expect(automovel.acelera).toHaveBeenCalled();
	});
	
	it("deve esperar que um comportamento seja executado duas vezes.",function(){
		automovel = new Automovel();
		spyOn(automovel,'acelera');
		
		automovel.acelera(2);
		automovel.desacelera();
		automovel.acelera(5);
		automovel.desacelera();
		automovel.desacelera();
		expect(automovel.acelera.calls.length).toEqual(2);
	});

	it("o valor final deve ser 30",function(){

		automovel = new Automovel();
		automovel.acelera(2);
		automovel.desacelera();
		automovel.acelera(5);
		automovel.desacelera();
		automovel.desacelera();

		expect(automovel.velocidade).toEqual(30);
	});
	
	it("tratores devem acelerar mais para atingir a velocidade dos automoveis",function(){

		Trator.prototype = new Automovel();// Permite que a classe trator herde os comportamentos de Automovel
		trator = new Trator();
		trator.acelera(4); 	
		trator.desacelera();
		trator.acelera(6); 	

		expect(trator.velocidade).toEqual(30);
		
	});

});
