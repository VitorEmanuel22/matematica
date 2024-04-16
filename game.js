let jogador1 = localStorage.getItem("j1");
let jogador2 = localStorage.getItem("j2");

let pontosj1 = 0;
let pontosj2 = 0;

document.getElementById("nomeJogador1").innerHTML=jogador1+" : ";
document.getElementById("nomeJogador2").innerHTML=jogador2+" : ";

document.getElementById("pontosJogador1").innerHTML=pontosj1;
document.getElementById("pontosJogador2").innerHTML=pontosj2;