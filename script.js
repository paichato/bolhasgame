
var contador=0;
var bolas=["a","b", "bola"];
var contadorb=0;
var wau=["wauh","massa","good","demais", "excelente"];

function addBola(){
var xbolas=Math.floor(Math.random()*3);
var bola= document.createElement("div");
bola.setAttribute("class", bolas[xbolas]);

var p1=Math.floor(Math.random()*500);
var p2=Math.floor(Math.random()*400);
//cor da bola
//bola.setAttribute("style", "background-color:blue; color:blue;");

bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;");
bola.setAttribute("onclick","estourar(this)");
document.body.appendChild(bola);
//bolas[contador]=bola;
contador++;
console.log("contador="+contador);

}


function estourar(e){
    contadorb++;

console.log(contadorb +".....isso");
//substituir bola por texto

document.body.removeChild(e);
//mudando o score
console.log(document.getElementById("score").innerHTML);
document.getElementById("score").innerHTML=contadorb+"X";
if(contadorb>=5){
    var texto=document.createElement("h2");
    texto.setAttribute("class", "x");
    var r=wau[Math.floor(Math.random()*4)];
    texto.innerHTML=r;
    document.body.appendChild(texto);
    
}




}

function iniciar(){
    setInterval(addBola, 1000);
}

function removerTexto(e){
    //document.body.removeChild(e);\

//
//var texto=document.createElement("h4");
//var r=wau[Math.floor(Math.random()*4)];

//texto.innerHTML=r;
//substituir na posicao da bola
//texto.setAttribute("style", "position:absolute; left:"+e.offsetLeft+"px; top:"+e.offsetTop+"px; ")
//document.body.replaceChild(texto,e);
//texto.setAttribute("class", "s");
    e.setAttribute("class", "s");
}