

function addBola(){
var bola= document.createElement("div");
bola.setAttribute("class", "bola");

var p1=Math.floor(Math.random()*500);
var p2=Math.floor(Math.random()*400);
//cor da bola
bola.setAttribute("style", "background-color:blue");

bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;");
bola.setAttribute("onclick","estourar(this)");
document.body.appendChild(bola);

}

function estourar(e){
document.body.removeChild(e);
var wau=["wauh","massa","good","demais", "excelente"];
var texto=document.createElement("h4");
var r=wau[Math.floor(Math.random()*4)];
texto.innerHTML=r;
texto.setAttribute("style", "left:"+400+"px; top:"+e.p2+"px;")
document.body.appendChild(texto);
}

function iniciar(){
    setInterval(addBola, 1000);
}
