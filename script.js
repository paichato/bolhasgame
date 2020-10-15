
var contador=0;
var bolas=[];

function addBola(){
var bola= document.createElement("div");
bola.setAttribute("class", "bola");

var p1=Math.floor(Math.random()*500);
var p2=Math.floor(Math.random()*400);
//cor da bola
//bola.setAttribute("style", "background-color:blue; color:blue;");

bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;");
bola.setAttribute("onclick","estourar(this)");
document.body.appendChild(bola);
bolas[contador]=bola;
contador++;
console.log("contador="+contador);
}


function estourar(e){
//document.body.removeChild(e);
var wau=["wauh","massa","good","demais", "excelente"];
var texto=document.createElement("h4");
var r=wau[Math.floor(Math.random()*4)];

texto.innerHTML=r;
texto.setAttribute("style", "position:absolute; left:"+e.offsetLeft+"px; top:"+e.offsetTop+"px; ")

console.log(e.p1);
document.body.replaceChild(texto,e);

var contador2=document.body.childElementCount;
bolas.indexOf(e);
//console.log("contador="+contador);
console.log(document.body.childElementCount);
removerTexto(texto);


//if(contador>2 && document.body.childElementCount){
//removerTexto(texto);
//}
//setInterval(removerTexto(texto),5000);

//document.body.

}

function iniciar(){
    setInterval(addBola, 1000);
}

function removerTexto(e){
    setInterval(document.body.removeChild(e),1000);
}