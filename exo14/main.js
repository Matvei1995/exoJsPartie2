/*Créer un programme permettant de Calculer l’IMC d’une personne
-Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille
-Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul (à 2 nombre après la virgule si possible)
-Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console : 
Le nom de la personne, son poids, sa taille et son imc dans une phrase 
-En dehors de la class (donc dans le programme principal)
, récupérer la variable list (un tableau de nouvelle instances de la class) 
    -Trouver un moyen de parcourir les éléments dans la variable list,
     sur chaque element utiliser la fonction display . */

class Imc{
    constructor(newNom, newPoids,newTaille){
        this.nom = newNom;
        this.poids = newPoids;
        this.taille = newTaille;
    }
    calculImc(){
        return this.poids/(this.taille*this.taille);
    }
    display(){
        console.log(this.nom + " Il pèse " +this.poids + "kg" + " il fait "+this.taille + "cm est son IMC est de " + this.calculImc().toFixed(2));
    }
}
const mat = new Imc('mat',67,1.69);
mat.display();