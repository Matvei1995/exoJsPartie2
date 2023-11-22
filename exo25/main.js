/**Depuis l'exercice 24 précédent modifier la fonction updateTask :
-Ajouter une variable (let)  statut qui va contenir un boolean => true
elle va effectuer le traitement suivant (updateTask):
-ajouter une condition qui va tester la valeur de la variable statut :
       -> si statut est égal à true (if)
                -1 récupérer la valeur du paragraphe,
                -2 créer un input de type texte,
                -3 remplacer le paragraphe par l'input précédemment créé, (replaceChild(nouvel élément, enfant)
                -4 assigner la valeur (1) à l'input,
                -5 passer statut à false,
      -> si statut est égal à false (else) :
                -1 récupérer la valeur de l'input (value),
                -2 créer un paragraphe,
                -3 remplacer l'input par le paragraphe replaceChild (paragraphe, enfant (input),
                -4 assigner au paragraphe la valeur (1),
                -5 passer statut à true, */
//récupération de la div (id="tasks")
const tasks = document.querySelector('#tasks');
//function addTask
function addTask(){
    //récupération de la valeur saisie dans l'input task
    const task = document.getElementById('task').value;
    if(task!=""){
        //créer une div
        const container = document.createElement('div');
        //ajouter une classe
        container.setAttribute('class', 'container');
        //créer les 2 boutons
        const btDel = document.createElement('button');
        //ajouter id au bouton
        btDel.setAttribute('id', 'delete');
        //ajout du texte du bouton
        btDel.textContent = "Delete";
        //ajouter le onclick au bouton
        btDel.setAttribute('onclick', "deleteTask(this)");
        //créer le bouton update
        const btUpdate = document.createElement('button');
        //ajouter un id au bouton
        btUpdate.setAttribute('id', 'update');
        //ajout du texte du bouton
        btUpdate.textContent = "Update";
        //ajouter la fonction updateTask au bouton
        btUpdate.setAttribute('onclick', 'updateTask(this)');
        //créer un paragraphe
        const paragraphe = document.createElement('p');
        //ajouter la valeur de l'input au nouveau paragraphe
        paragraphe.textContent = task;
        //ajouter les enfants à la div (id="container")
        container.appendChild(paragraphe);
        container.appendChild(btDel);
        container.appendChild(btUpdate);
        //ajouter container à la div tasks
        tasks.appendChild(container);
    }
}
function delAllTask(){
    //boucle pour parcourir le premier enfant
    while(tasks.firstChild){
        //supprimer le premier enfant
        tasks.firstChild.remove();
    }
}
function reload(){
    //alternative
    //window.location.reload();
    //version raccourci
    location.reload();
}
//fonction supprimer une tache
function deleteTask(e) {
    //récupére le bouton-> passe au parent et on supprime le parent
    e.parentNode.remove();
}
//fonction pour mettre à jour une tache
function updateTask(e){
    //récupérer la valeur de task (input)
    const task = document.querySelector('#task').value;
    if(task!=""){
        //mise à jour du paragraphe
        e.parentNode.firstChild.textContent = task;
    }
}