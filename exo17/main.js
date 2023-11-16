/*Gérer des compte en banque :
Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à un autre.
Faire une scénario avec la gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
Puis Alex retire 100
Puis Marco fait un virement de 300 à Clovis
Enfin Alex tente un retrait de 600
Afficher tous les soldes finaux.
Ces compte sont placés dans un tableau associatif de clients 
Bonus :
Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui dépassent le solde du compte bancaire),
Tester avec une tentatives de retret de Alex de 1200 € */

class CompteBancaire {
  constructor(nom, solde) {
    this.nom = nom;
    this.solde = solde;
  }

  créditer(montant) {
    this.solde += montant;
  }

  retirer(montant) {
    if (montant > this.solde) {
      throw new Error("Retrait impossible, solde insuffisant");
    }
    this.solde -= montant;
  }

  virer(destinataire, montant) {
    this.retirer(montant);
    destinataire.créditer(montant);
  }

  afficherSolde() {
    console.log(`Le solde du compte de ${this.nom} est de ${this.solde} €`);
  }
}

const alex = new CompteBancaire("Alex", 1000);
const clovis = new CompteBancaire("Clovis", 1000);
const marco = new CompteBancaire("Marco", 1000);

// Crédit
alex.créditer(100);

// Virement
marco.virer(clovis, 300);

// Retrait
function withdrawForAlex(sum) {
  try {
    alex.retirer(sum);
  } catch (err) {
    console.log(err);
  }
}
withdrawForAlex(600);



// Affichage des soldes finaux
alex.afficherSolde();
clovis.afficherSolde();
marco.afficherSolde();
withdrawForAlex(1200);