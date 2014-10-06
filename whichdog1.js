window.onload = main;
function main(){
	document.getElementById("id1").style.color = "white";
	document.getElementById("id1").style.fontSize = "120px";
	document.getElementById("id1").style.fontFamily = "Arial";
	document.getElementById("img1").style.maxWidth = "700px";
	document.getElementById("img1").style.maxHeight = "300px";
	document.getElementById("img1").style.cssFloat = "left";
	document.getElementById("p1").style.color = "white";
	document.getElementById("id2").style.textAlign = "center";
	document.getElementById("aba1").style.width = "20%";
	document.getElementById("aba2").style.width = "30%";
	document.getElementById("aba3").style.width = "30%";
	document.getElementById("aba1").style.height = "40%";
	document.getElementById("aba2").style.height = "40%";
	document.getElementById("aba3").style.height = "40%";

	//função se seleção de abas
	function sel(idaba){
		var aba=document.getElementById(idaba);
		var nAbas=4;
		for(var i=1;i<=nAbas;i++){
			var id="aba"+i;
			document.getElementById(id).className="unsel";
		}
		aba.className="sel";
		for(var u=1;u<=nAbas;u++){
			var idt="textaba"+u;
			document.getElementById(idt).className="divunsel";
		}
		var iddiv="text"+idaba;
		document.getElementById(iddiv).className="divsel";
	}
	
	document.getElementById('aba1').addEventListener('click', function(){
		sel('aba1');
	});
	
	document.getElementById('aba2').addEventListener('click', function(){
		sel('aba2');
	});
	
	document.getElementById('aba3').addEventListener('click', function(){
		sel('aba3');
	});
	
	document.getElementById('aba4').addEventListener('click', function(){
		sel('aba4');
	});
	
	sel('aba1');
}

