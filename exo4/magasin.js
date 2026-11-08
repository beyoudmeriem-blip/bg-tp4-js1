// ===== 1. Représenter un produit 
const produit = { nom: "Stylo", prix: 50, quantite: 20 };
console.log("1. Produit :", produit);
console.log("Valeur du stock :", produit.prix * produit.quantite, "DA");

// ===== 2. Catalogue de 5 produits 
const catalogue = [
  { nom: "Cahier", prix: 120, quantite: 30 },
  { nom: "Stylo", prix: 50, quantite: 100 },
  { nom: "Calculatrice", prix: 1500, quantite: 10 },
  { nom: "Sac à dos", prix: 3200, quantite: 5 },
  { nom: "Règle", prix: 80, quantite: 40 },
];

const prixMoyen =
  catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;
console.log("\n2. Prix moyen du catalogue :", prixMoyen);
console.log(
  "Produits dont le prix dépasse la moyenne :",
  catalogue.filter((p) => p.prix > prixMoyen)
);

// ===== 3. Total des articles et valeur globale (reduce) 
const totalArticles = catalogue.reduce((total, p) => total + p.quantite, 0);
const valeurGlobale = catalogue.reduce(
  (total, p) => total + p.prix * p.quantite,
  0
);
console.log("\n3. Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale, "DA");

// ===== 4. Fonction : valeur du stock d'un produit 
function valeurStock(p) {
  return p.prix * p.quantite;
}

console.log("\n4. Valeur du stock par produit :");
console.log("Cahier :", valeurStock(catalogue[0]));
console.log("Calculatrice :", valeurStock(catalogue[2]));
console.log("Sac à dos :", valeurStock(catalogue[3]));

// ===== 5. Callbacks : traitement sur tout le catalogue 
function appliquerTraitement(cat, callback) {
  cat.forEach(callback);
}

console.log("\n5. Noms des produits :");
appliquerTraitement(catalogue, (p) => console.log(p.nom));

console.log("Prix des produits :");
appliquerTraitement(catalogue, (p) => console.log(p.prix, "DA"));