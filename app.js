var scoreOrdi = 0;
var scoreJoueur = 0;
document.getElementById("scoreOrdi").innerHTML = 0;
document.getElementById("scoreJoueur").innerHTML = 0;


var choixJoueur;
var choixOrdi;
var btnPapier = document.getElementById("bouton_papier");
var btnPierre = document.getElementById("bouton_pierre");
var btnCiseau = document.getElementById("bouton_ciseau");


// comportement en fonction du gagnant
function ordiGagne() {
    document.getElementById("winner").value = "ORDINATEUR";
}
function joueurGagne(){
    document.getElementById("winner").value = "VOUS";
}
function egalite() {
    document.getElementById("winner").value = "EGALITE";
}


// différents cas de figures
function gameOn() {
    if (choixJoueur == 1 && choixOrdi == 1) {
        document.getElementById("jeuJoueur").value = "PIERRE";
        document.getElementById("jeuOrdi").value = "PIERRE";
        egalite();
    }
    else if (choixJoueur == 2 && choixOrdi == 2) {
        document.getElementById("jeuJoueur").value = "PAPIER";
        document.getElementById("jeuOrdi").value = "PAPIER";
        egalite();
    }
    else if (choixJoueur == 0 && choixOrdi == 0) {
        document.getElementById("jeuJoueur").value = "CISEAU";
        document.getElementById("jeuOrdi").value = "CISEAU";
        egalite();
    }
    else if (choixJoueur == 1 && choixOrdi == 2) {
        document.getElementById("jeuJoueur").value = "PIERRE";
        document.getElementById("jeuOrdi").value = "PAPIER";
        ordiGagne();
        scoreOrdi++;
    }
    else if (choixJoueur == 1 && choixOrdi == 0) {
        document.getElementById("jeuJoueur").value = "PIERRE";
        document.getElementById("jeuOrdi").value = "CISEAU";
        joueurGagne();
        scoreJoueur++;
    }
    else if (choixJoueur == 2 && choixOrdi == 1) {
        document.getElementById("jeuJoueur").value = "PAPIER";
        document.getElementById("jeuOrdi").value = "PIERRE";
        joueurGagne();
        scoreJoueur++;
    }
    else if (choixJoueur == 2 && choixOrdi == 0) {
        document.getElementById("jeuJoueur").value = "PAPIER";
        document.getElementById("jeuOrdi").value = "CISEAU";
        ordiGagne();
        scoreOrdi++;
    }
    else if (choixJoueur == 0 && choixOrdi == 1) {
        document.getElementById("jeuJoueur").value = "CISEAU";
        document.getElementById("jeuOrdi").value = "PIERRE";
        ordiGagne();
        scoreOrdi++;
    }
    else if (choixJoueur == 0 && choixOrdi == 2) {
        document.getElementById("jeuJoueur").value = "CISEAU";
        document.getElementById("jeuOrdi").value = "PAPIER";
        joueurGagne();
        scoreJoueur++;
    }
    document.getElementById("scoreOrdi").innerHTML = scoreOrdi;
    document.getElementById("scoreJoueur").innerHTML = scoreJoueur;
}


// jeu
btnPapier.addEventListener("click", function () {
    choixJoueur = 2;
    choixOrdi = Math.round(Math.random() * 2);
    gameOn();
})
btnCiseau.addEventListener("click", function () {
    choixJoueur = 0;
    choixOrdi = Math.round(Math.random() * 2);
    gameOn();
})
btnPierre.addEventListener("click", function () {
    choixJoueur = 1;
    choixOrdi = Math.round(Math.random() * 2);
    gameOn();
})

