/*Créer une classe Maison avec comme attributs (constructeur):
-Nom,
-Longueur,
-Largeur,
Créer une méthode périmètre de la maison,
Créer une méthode surface de la maison,
Afficher le périmètre dans la console en mètre linéaire,
Afficher la surface dans la console en mètre carré,

Bonus :
Ajouter un attribut nbrEtage à la maison,
Afficher dans la console la surface pour 3 étages en mètre carrés.*/

class Maison {
    nom;
    longueur;
    largeur;
    constructor(newNom, newLongueur, newLargeur){
        this.nom = newNom;
        this.longueur = newLongueur;
        this.largeur = newLargeur;
    }


perimetre(){
    console.log((this.longueur+this.largeur)*2 + 'm');

}
surface(){
    console.log(this.longueur*this.largeur +'m2');
}
etage(){
    console.log((this.longueur*this.largeur)*3);
}
}

const newMaison = new Maison( 'Sandra', 20, 9);
newMaison.perimetre();
newMaison.surface();
newMaison.etage();
