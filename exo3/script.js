"use strict"; // Mode strict (slide 52)

// Données Students : tableau d'objets (slide 41)
// Format : (id, prénom, nom, note, 5e valeur non utilisée pour la décision)
const Students = [
  { id: 1000, prenom: "JOHN",   nom: "DOE",     note: 14, autre: 5 },
  { id: 2000, prenom: "BOB",    nom: "CARLTON", note: 7,  autre: 1 },
  { id: 3000, prenom: "RAYANE", nom: "SMITH",   note: 13, autre: 3 }
];

// Fonction B : 1 seul paramètre, retourne un booléen (Fonctions avec retour, slide 46)
function B(note) {
  return note >= 10; // opérateur de comparaison (slide 42) -> booléen true/false (slide 38)
}

// Fonction A : appelée par onclick (slides 15-16), appelle B pour chaque étudiant (slide 46)
function A() {
  // Boucle for...of (slide 45)
  for (const s of Students) {
    // Condition en notation ternaire : condition ? si vrai : si faux (slide 43)
    const decision = B(s.note) ? "ADMIS" : "AJOURNÉ";
    // Affichage avec console.log (slide 34), concaténation (slide 38)
    console.log(s.id + ": " + decision);
  }
}