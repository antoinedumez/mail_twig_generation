// on définie la somme à 0
const sum = 0;
// on selectionne tous les textes qui correspondent au montants
const array = document.querySelectorAll(".the-class-name");
// on boucle sur chaque texte
array.forEach(e => {
  // si le texte contient le symbole € on le récupère, on le nettoie (enleve les espaces) et on l'additionne à la précédante somme
  // fonctionne si les résultats sont en 12.4 et pas avec une virgule
  if (e.textContent.includes("€")) sum += Number(message.replace("€", '').trim());
}) 
// On fini en écrivant le résultat de toutes ces additions
console.log(sum);



