/*Créer une classe Personnage qui va contenir les éléments suivants :
-nom, force, défense, vie
-une méthode pour attaquer (elle va soustraire à la vie du personnage la valeur de attaque (attaquant) à la défense (notre personnage),
Créer une classe Combat qui  va contenir les éléments suivants :
-nbr de tour, score joueur 1, score joueur 2,
-Une méthode qui va lancer les combats (elle va appeler la méthode attaque du joueur 1), (appeler la méthode d'attaque du joueur 2). 
Cela va s'exécuter autant de tour que la valeur nbr de tour. 
Celui qui arrive à zéro à perdu.
Ella va afficher le nom du gagnant.  */


class Personnage {
    constructor(nom, force, defense, vie) {
      this.nom = nom;
      this.force = force;
      this.defense = defense;
      this.vie = vie;
    }
  
    attaquer(attaquant) {
        
        let degats = this.force - attaquant.defense;
        console.log(`${this.nom} attaque ${attaquant.nom} et lui inflige ${degats} points de dégâts.`);
        this.vie -= Math.max(degats,0);
      }
  }
  
  class Combat {
    constructor(nbrTour, joueur1, joueur2) {
      this.nbrTour = nbrTour;
      this.joueur1 = joueur1;
      this.joueur2 = joueur2;
      this.scoreJoueur1 = 0;
      this.scoreJoueur2 = 0;
    }
  
    lancerCombat() {
      for (let i = 0; i < this.nbrTour; i++) {
        // Attaque du joueur 1
        console.log(`Tour ${i + 1} : ${this.joueur1.nom} attaque.`);
        this.joueur1.attaquer(this.joueur2);
  
        // Attaque du joueur 2
        console.log(`Tour ${i + 1} : ${this.joueur2.nom} attaque.`);
        this.joueur2.attaquer(this.joueur1);
  
        // Vérification du gagnant
        if (this.joueur1.vie <= 0) {
          this.scoreJoueur2++;
        } else if (this.joueur2.vie <= 0) {
          this.scoreJoueur1++;
        }
      }
  
      // Affichage du gagnant
      if (this.scoreJoueur1 > this.scoreJoueur2) {
        console.log("Le gagnant est " + this.joueur1.nom);
      } else {
        console.log("Le gagnant est " + this.joueur2.nom);
      }
    }
  }
  
  const joueur1 = new Personnage("Jean", 10, 10, 100);
  const joueur2 = new Personnage("Pierre", 5, 10, 100);
  
  const combat = new Combat(5, joueur1, joueur2);
  
  combat.lancerCombat();
  