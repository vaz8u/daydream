
document.getElementById("button").addEventListener("click", () => {
    afficherTableauDansHTML(tabX,tabY,tabZ);
});

let tableau = [];
let projets = [];

const tabX = 20;
const tabY = 50;
const tabZ = 9;

let nom_projet = "Projet 1";
document.getElementById("nom_projet").textContent = nom_projet;

// Génère un tableau 2D avec des nombres aléatoires
function genererTableau(x, y, z) {
    const tab = [];
    for (let i = 0; i < x; i++) {
        const ligne = [];
        for (let j = 0; j < y; j++) {
            ligne.push(Math.floor(Math.random() * (z + 1)));
        }
        tab.push(ligne);
    }
    tableau = tab;
}

function afficherBoites(projets) {
    const boitesContainer = document.getElementById("boites");
    boitesContainer.innerHTML = ""; // Réinitialiser l'intérieur du conteneur
  
    for (let i = 0; i < projets[0].boites.length; i++) { // Récupérer les boîtes
      // Conteneur pour chaque dropup
      const dropupContainer = document.createElement("div");
      dropupContainer.className = "dropup";
  
      // Bouton de la boîte
      const dropbtn = document.createElement("button");
      dropbtn.className = "dropbtn";
      dropbtn.textContent = `0${i + 1}`; // Affiche "Boite 1", "Boite 2", etc.
  
      // Contenu de la boîte (dropup content)
      const dropupContent = document.createElement("div");
      dropupContent.className = "dropup-content";
      dropupContent.appendChild(afficherBoite(projets[0].boites[i], dropbtn.textContent));
  
      // Ajoute les éléments au conteneur
      dropupContainer.appendChild(dropbtn);
      dropupContainer.appendChild(dropupContent);
  
      // Ajoute le conteneur au conteneur principal
      boitesContainer.appendChild(dropupContainer);
    }
  }
  
  // Fonction pour créer une boîte (affichage des 4 cellules)
  function afficherBoite(boite, numero) {
    const boiteElement = document.createElement("div");
    boiteElement.className = "boite";
  
    const boiteTableau = document.createElement("table");
    boiteTableau.className = "boite-tableau";

    const ligne0 = document.createElement("div");
    ligne0.style.textAlign = "center";
    ligne0.textContent = numero; // Récupérer le texte du bouton parent

    // Ligne 1 : "WO"
    const ligne1 = document.createElement("tr");
  
    const cellule1Text = document.createElement("td");
    cellule1Text.textContent = "WO";
  
    const cellule1Rectangle = document.createElement("td");
    cellule1Rectangle.appendChild(creerRectangle(boite.wo, "green"));
  
    ligne1.appendChild(cellule1Text);
    ligne1.appendChild(cellule1Rectangle);
  
    // Ligne 2 : "FC"
    const ligne2 = document.createElement("tr");
  
    const cellule2Text = document.createElement("td");
    cellule2Text.textContent = "FC"; 
  
    const cellule2Rectangle = document.createElement("td");
    cellule2Rectangle.appendChild(creerRectangle(boite.fc, "yellow"));
  
    ligne2.appendChild(cellule2Text);
    ligne2.appendChild(cellule2Rectangle);
  
    // Ligne 3 : "DR"
    const ligne3 = document.createElement("tr");
  
    const cellule3Text = document.createElement("td");
    cellule3Text.textContent = "DR";
  
    const cellule3Rectangle = document.createElement("td");
    cellule3Rectangle.appendChild(creerRectangle(boite.dr, "red"));
  
    ligne3.appendChild(cellule3Text);
    ligne3.appendChild(cellule3Rectangle);
  
    // Ligne 4 : "MA"
    const ligne4 = document.createElement("tr");
  
    const cellule4Text = document.createElement("td");
    cellule4Text.textContent = "MA";
  
    const cellule4Rectangle = document.createElement("td");
    cellule4Rectangle.appendChild(creerRectangle(boite.ma, "blue"));
  
    ligne4.appendChild(cellule4Text);
    ligne4.appendChild(cellule4Rectangle);
  
    // Ajout des lignes dans la table
    boiteTableau.appendChild(ligne0);
    boiteTableau.appendChild(ligne1);
    boiteTableau.appendChild(ligne2);
    boiteTableau.appendChild(ligne3);
    boiteTableau.appendChild(ligne4);
  
    // Ajout de la table dans la boîte
    boiteElement.appendChild(boiteTableau);
  
    return boiteElement;
  }
  
  

function creerRectangle(valeur, couleur) {
    // Conteneur principal du rectangle
    const rectangle = document.createElement("td");
    rectangle.style.width = "200px"; // Largeur du rectangle
    rectangle.style.height = "20px"; // Hauteur du rectangle
    rectangle.style.border = `1px solid ${couleur}`; // Bordure noire
    //rectangle.style.backgroundColor = "#fff"; // Couleur de fond blanche
    rectangle.style.position = "relative";
    rectangle.style.overflow = "hidden";
// rectangle.style.paddingLeft = "5px"; // Espace à gauche pour la bande colorée
    
    // Bande colorée à l'intérieur du rectangle
    const bandeCouleur = document.createElement("div");
    bandeCouleur.style.width = `${valeur}%`; // Largeur proportionnelle à la valeur
    bandeCouleur.style.height = "100%"; // Hauteur égale au rectangle
    bandeCouleur.style.backgroundColor = couleur; // Couleur d'entrée
    
    // Ajouter la bande colorée dans le rectangle
    rectangle.appendChild(bandeCouleur);
    
    return rectangle;
}


function afficherTableauDansHTML(x, y, z) {
    genererTableau(x, y, z);
    const grilleContainer = document.getElementById("grille");
    grilleContainer.innerHTML = ""; // Réinitialiser l'intérieur du conteneur
  
    tableau.forEach((ligne) => {
      const rowElement = document.createElement("div");
      rowElement.className = "ligne";
  
      ligne.forEach((nombre) => {
        const cellElement = document.createElement("div");
        cellElement.className = "cellule";
  
        // Ajouter un élément <span> pour le chiffre animé
        const chiffreElement = document.createElement("span");
        chiffreElement.className = "chiffre";
        chiffreElement.textContent = nombre;
  
        // Générer des animations aléatoires
        animerChiffre(chiffreElement);
  
        // Ajouter le chiffre animé à la cellule
        cellElement.appendChild(chiffreElement);
        rowElement.appendChild(cellElement);
      });
  
      grilleContainer.appendChild(rowElement);
    });
  }
  
  function animerChiffre(element) {
    // Définir une durée d'animation aléatoire entre 3 et 6 secondes
    const duration = Math.random() * 3 + 8; // Entre 3s et 6s
  
    // Délais d'animation aléatoires pour désynchroniser les mouvements
    const delay = Math.random() * 2; // Entre 0 et 2 secondes

    // Générer des valeurs de déplacement aléatoires (entre -5px et 5px)
    const translateX1 = Math.random() * 10 - 5; // Entre -5px et 5px
    const translateY1 = Math.random() * 10 - 5; // Entre -5px et 5px
    const translateX2 = Math.random() * 10 - 5; // Autre déplacement aléatoire
    const translateY2 = Math.random() * 10 - 5; // Autre déplacement aléatoire

    // Définir des animations complètement uniques
    element.style.animation = `mouvementAleatoire ${duration}s infinite ease-in-out`;
    element.style.animationDelay = `${delay}s`; // Délais aléatoires
    element.style.setProperty("--translateX1", `${translateX1}px`);
    element.style.setProperty("--translateY1", `${translateY1}px`);
    element.style.setProperty("--translateX2", `${translateX2}px`);
    element.style.setProperty("--translateY2", `${translateY2}px`);
  }

  function activerSelection() {
    let isMouseDown = false; // Indique si le clic est maintenu
    const grilleContainer = document.getElementById("grille");
  
    // Détection du clic initial
    grilleContainer.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("chiffre") || e.target.classList.contains("cellule")) {
        isMouseDown = true;
        selectionnerElement(e.target); // Sélectionne le chiffre ou la cellule
      }
    });
  
    // Détection du survol avec clic maintenu
    grilleContainer.addEventListener("mousemove", (e) => {
      if (isMouseDown && (e.target.classList.contains("chiffre") || e.target.classList.contains("cellule"))) {
        selectionnerElement(e.target);
      }
    });
  
    // Arrêt de la sélection lorsque le clic est relâché
    window.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
  }
  
  let valeursSelectionnees = [];

  function selectionnerElement(element) {
    // Vérifie si l'utilisateur clique sur un chiffre ou sur une cellule
    const cible = element.classList.contains("chiffre") ? element : element.querySelector(".chiffre");
  
    if (cible && !cible.classList.contains("selected")) {
      cible.classList.add("selected"); // Marque comme sélectionné
      cible.style.fontSize = "40px"; // Augmente la taille de la police (plus gros)
      cible.style.fontWeight = "bold"; // Met le texte en gras
      cible.style.transition = "font-size 0.3s ease"; // Animation douce
  
      // Ajoute la valeur du chiffre sélectionné au tableau
      valeursSelectionnees.push(cible.textContent);
  
      // Affiche les valeurs sélectionnées dans la console (optionnel)
      console.log("Valeurs sélectionnées :", valeursSelectionnees);
    }
  }
  
  // Activer la sélection après le chargement de la page
  document.addEventListener("DOMContentLoaded", () => {
    activerSelection();
  });  

  async function chargerDonnees() {
    try {
      // Récupérer les données depuis l'API
      const response = await fetch("/api/donnees");
      const data = await response.json();
  
      console.log("Données reçues :", data);
  
      // Variable pour stocker les projets
      const projets = data.projets;
  
      // Cibler le conteneur du menu
      const menuDeroulant = document.getElementById("menu-deroulant");
  
      // Vider le conteneur (au cas où il contiendrait déjà des éléments)
      menuDeroulant.innerHTML = "";
  
      // Ajouter les projets en tant qu'éléments de menu
      projets.forEach((projet) => {
        const lien = document.createElement("a");
        lien.href = `#${projet.nom}`; // Personnalisation du lien
        lien.textContent = projet.nom; // Nom du projet comme texte
  
        lien.addEventListener("click", () => {
          nom_projet = projet.nom;
          document.getElementById("nom_projet").textContent = nom_projet;
          afficherTableauDansHTML(tabX, tabY, tabZ);
        });
  
        menuDeroulant.appendChild(lien);
      });

      afficherBoites(projets);

    } catch (error) {
      // Gestion des erreurs
      console.error("Erreur lors de la récupération des données :", error);
    }
  }
  
  // Charger les données
  chargerDonnees();
  

/*
const projetss = [
    "Adelaide", "Allentown", "Astoria", "Bellingham", "Billings",
    "Boda", "Cairnes", "Chicxulub", "Cielo", "Cold Harbor",
    "Coleman", "Cork", "Culpepper", "Dranesville", "Eau Claire",
    "Eminence", "Erie", "Fort Dodge", "Gold Coast", "Grimaldi",
    "Grimsby", "Hefei", "Homestead", "Horseshoe Bend", "Jaspur",
    "Jesup", "Kingsport", "Labrador", "Le Mars", "Lexington",
    "Longbranch", "Loveland", "Lucknow", "Merida", "Minsk",
    "Molde", "Montauk", "Moonbeam", "Morioka", "Nanning",
    "Narva", "Ocula", "Pacoima", "Rhodes", "Santa Mira",
    "Siena", "Sopchoppy", "St. Pierre", "Sunset Park", "Tan An",
    "Todos Santos", "Trinity", "Tumwater", "Vilnius", "Waynesboro",
    "Wellington", "Yakima", "Zurich"
  ];
  
  const jsonResult = {
    projets: projetss.map((nom) => ({
      nom: nom,
      progressionTotale: 0,
      boites: Array.from({ length: 5 }, () => ({
        progression: 0,
        wo: 0,
        fc: 0,
        dr: 0,
        ma: 0
      }))
    }))
  };
  
  console.log(JSON.stringify(jsonResult, null, 2));*/
