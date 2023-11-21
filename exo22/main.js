function prixTtc() {
    // Récupération des valeurs des inputs
    const article = document.getElementById("article").value;
    const prixHt = document.getElementById("prixHt").value;
    const quantite = document.getElementById("quantite").value;
  
    // Calcul du prix TTC
    const prixTtc = (prixHt * quantite * 1.2).toFixed(2);
  
    // Affichage du résultat
    document.getElementById("resultat").innerText = ` Cet objet est ${article} . Son prix TTC est de: ${prixTtc} €`;
  }
  