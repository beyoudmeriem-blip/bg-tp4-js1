"use strict"; // Mode strict (slide 52)

// f1 : tableau de chaînes (Tableaux, slide 39), fonction appelée par onclick (slides 15-16)
function f1() {
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"]; // Tableau (slide 39)
  // Boucle for : parcourt chaque élément (slide 45)
  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]); // accès par indice (slide 39), affichage console.log (slide 34)
  }
}

// f2 : un objet avec ses propriétés (Objets, slide 40)
function f2() {
  const etudiant = { nom: "John", prenom: "DOE", age: 30 }; // objet (slide 40)
  console.log(etudiant); // affiche l'objet entier (slide 40)
}

// f3 : tableau d'objets (slide 41)
function f3() {
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];
  // Boucle for...of : parcourt chaque objet (slide 45)
  for (const e of etudiants) {
    // Accès aux propriétés avec la notation point (slide 40) et concaténation (slide 38)
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  }
}