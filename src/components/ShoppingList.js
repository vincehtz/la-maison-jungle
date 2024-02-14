import "../styles/ShoppingList.css";
import { plantList } from "../data/plantList";

function ShoppingList() {
  // Utilisation de la méthode reduce pour extraire les catégories uniques
  // On déclare une variable qui sera un nouveau tableau réduit, issu du premier tableau
  const categories = plantList.reduce(
    // Fonction de rappel avec deux paramètres : acc (accumulateur qui stocke le résultat de l'iteration precedente dans le nouveau tableau) et plant (élément actuel parcouru dans le premier tableau)
    (acc, plant) =>
      // Vérifie si la catégorie de la plante est déjà dans l'accumulateur
      acc.includes(plant.category)
        ? // Si oui, renvoie l'accumulateur sans modification
          acc
        : // Sinon, renvoie l'accumulateur avec la catégorie de la plante concaténée à la fin
          acc.concat(plant.category),
    // Initialise l'accumulateur à un tableau vide
    []
  ); // A ce stade, le nouceau tableau est créé (vérifier avec un console.log)

  // Ensuite on crée le composant avec les données du nouveau tableau
  // La methode map parcourt chaque élément du tableau et lui applique une fonction
  // On map donc les 2 tableaux
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          // Pour chaque catégorie, crée un élément <li> avec la catégorie comme contenu et l'identifiant de catégorie comme clé
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      {/* Affiche une liste des plantes */}
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          // Pour chaque plante, crée un élément <li> avec le nom de la plante comme contenu et l'identifiant de plante comme clé
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
