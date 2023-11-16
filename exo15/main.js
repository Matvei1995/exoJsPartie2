/*-Créer une classe Vehicule avec les attributs suivants :
nom, couleur, nbrRoue, vitesse,
-Instancier 2 nouveaux Vehicule avec les paramètres suivants :
-Objet voiture (nomVehicule = « Mercedes CLK », nbrRoue = 4, vitesse 250),
-Objet moto (nomVehicule = « Honda CBR », nbrRoue = 2, vitesse = 280),
-Créer une fonction detect() qui détecte si le véhicule est une moto ou une voiture (la méthode retourne une string  moto ou voiture avec return),
-Exécuter la méthode detect() sur les 2 objets voiture et moto,
-Afficher le type de Vehicule (méthode detect afficher dans la console)
-Créer une méthode boost qui ajoute 50 à la vitesse d’un Vehicule
-Appliquer la méthode boost a la voiture,
-Afficher la nouvelle vitesse de la voiture,

Bonus :
-Créer une méthode plusRapide() dans la classe Vehicule qui compare la vitesse des différents véhicules (moto et voiture) et retourne le Vehicule le plus rapide des 2 avec un return.
-Exécuter la méthode plusRapide(),
-Afficher le Vehicule le plus rapide dans la console. */

class Vehicule {
    constructor( nom, couleur, nbrRoue, vitesse){
        this.nom = nom;
        this.couleur = couleur;
        this.nbrRoue = nbrRoue;
        this.vitesse = vitesse;

    }
    detect(){
        if(this.nbrRoue > 2){
            console.log(`C'est une voiture`);
        }else{
            console.log(`C'est une moto`);
        }
    }
    boost(ajoutDePuissance){
        this.vitesse += ajoutDePuissance;
    }
   

}

const voiture = new Vehicule('Mercedes CLK' ,'blanc' ,4 ,250)
const moto = new Vehicule('Honda CBR','bleu' ,2 ,280);

console.log(voiture);
voiture.detect();

console.log(moto);
moto.detect();

console.log(voiture);
voiture.boost(50);

console.log(`La voiture à été booster ça nouvelle vitesse est de ${voiture.vitesse}.`);

function plusRapide(){
    if (voiture.vitesse > moto.vitesse) {
        console.log(`le Vehicule le plus rapide est ${voiture.nom}`);
    }else{
        console.log(`le Vehicule le plus rapide est ${moto.nom}`);
    }
}   
plusRapide();