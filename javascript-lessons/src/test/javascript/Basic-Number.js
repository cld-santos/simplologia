describe("Conceitos b�sicos para trabalhar com valores num�ricos",function(){

	it("deve somar dois valores.",function(){
		var a, b, res;
		a=20; b=35;
		res = a+b;
		expect(res).toEqual(20+35);
	});
	
	it("deve multiplicar dois valores.",function(){
		var a,b,res;
		a=20; b=35;
		res = a*b;
		expect(res).toEqual(20*35);
	});

	it("deve dividir dois valores.",function(){
		var a,b,res;
		a=20; b=35;
		res = a/b;
		expect(res).toEqual(20/35);
	});
	
	it("deve subtrair dois valores.",function(){
		var a,b,res;
		a=20; b=35;
		res = a-b;
		expect(res).toEqual(20-35);
	});
});