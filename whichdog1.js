window.onload = main;
function main(){
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
	
	document.getElementById('tr_abas').addEventListener('click', function(e){
		sel(e.target.id);
	});
	sel('aba1');
}

