const h1 = document.querySelector("h1");
const div = document.querySelector("div");
const p = document.querySelector("div p");

// Changer la taille de la police du titre h1
h1.style.fontSize = "14px";

// Changer la police de la div et du paragraphe
div.style.fontFamily = "Arial";
p.style.fontFamily = "Arial";

// Changer la couleur du texte du paragraphe
p.style.color = "green";

// Ajouter un margin top à la div de 30 px
div.style.marginTop = "30px";

// Remplacer le contenu du titre h1
h1.textContent = "Nouveau titre";

// Remplacer le contenu du paragraphe
p.textContent = "Nouveau contenu du paragraphe.";

