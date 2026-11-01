"use strict"; // Mode strict (slide 52)

// Constantes avec const (slide 52)
const nom = "John";      // type String (slide 38)
const prenom = "Doe";    // type String (slide 38)
const age = 30;          // type Number entier (slide 38)
const note = 15;         // type Number (slide 38)
const pi = 3.14;         // type Number décimal (slide 38)

// Déclaration d'une fonction (slide 46), appelée par l'événement onclick (slides 15-16)
// Affichage avec console.log (slide 34)
function f1() {
  console.log(nom);
}

function f2() {
  console.log(prenom);
}

function f3() {
  // Affichage élaboré avec concaténation "+" (slide 38)
  console.log(nom + "-" + prenom);
}

function f4() {
  console.log(age);
}

function f5() {
  console.log(note);
}

function f6() {
  console.log(pi);
}