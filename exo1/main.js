/*Instancier 2 nouveaux objets :
     -objet chien (chien, 4, 50, 9),
     -objet coq(coq, 2, 40, 3),
-Modifier la classe Animal :
    ->modifier la fonction crier pour intégrer les espèces (chien et coq) et afficher dans la console un cris différent,
-Appeler la fonction crier sur les 4 objets :
tigre, chat, chien et le coq (pour vérifier si elle fonctionne correctement)
-Ajouter une méthode dormir qui va 
    -> afficher dans la console (Zzzzzz),
-Appeler la méthode dormir sur les objets :
tigre, chat, chien et coq.*/

class Animal{
    //attributs
    espece;
    nbrPattes;
    age;
    taille;
    poids;
    couleur;
    //Constructeur
    constructor(newEspece, newNbrPattes, newTaille, newPoids){
        this.espece = newEspece;
        this.nbrPattes = newNbrPattes;
        this.taille = newTaille;
        this.poid = newPoids;
    }
    //méthode
    crier(){
        if(this.espece == "Tigre" || this.espece == "tigre"){
            console.log("Grrr");
        }
        if(this.espece == "Chat" || this.espece == "chat"){
            console.log("Miaou");

        }if(this.espece == "Chien" || this.espece == "chien"){
            console.log('whafffff');
        }
        if(this.espece == "Coq" || this.espece == "coq"){
            console.log('cocoricoooo');
        }
    }

    dormir(){
            console.log('Zzzzzzzz');
    }
}
const tigre = new Animal('tigre', 4, 150, 180);
const chat = new Animal('chat', 4, 30,4);
const chien = new Animal('chien', 4, 50, 9);
const coq = new Animal('coq', 2, 40, 3);

console.log(tigre);
tigre.taille = 180;
tigre.couleur = "Blanc";

tigre.crier();
chat.crier();
chien.crier()
coq.crier();

tigre.dormir();
chat.dormir();
chien.dormir();
coq.dormir();