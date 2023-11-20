const user = {
    id : 1,
    nom: 'TABELEV',
    prenom: 'Matvei',
    age: '28 ans',
    image:'./logo.jpg',
  }

  const nom1 = document.querySelector("div p");
  const prenom1 = document.querySelector(".prenom");
  const age1 = document.querySelector(".age");

// Ajout de user id
  document.querySelector("div").setAttribute("id",user.id);

// Ajout de user nom
  nom1.textContent = user.nom;
  //changer le font
  nom1.style.fontSize = "11px";
  //changer couleur
  nom1.style.color = "blue"

// Ajout de user prenom
  prenom1.innerText = user.prenom;
    //changer le font
  prenom1.style.fontSize = "11px";
   //changer couleur
   prenom1.style.color = "blue"

// Ajout de user age
  age1.innerText = user.age;
    //changer le font
  age1.style.fontSize = "11px";
   //changer couleur
   age1.style.color = "blue"

   //-Remplacer l'image par l'url contenu dans user.image

  //document.querySelector(".img").textContent(user.image)
  const imag = document.querySelector("img");
  imag.src = user.image;

  imag.style.width = "100px";
  imag.style.height = "100px"


//Aligner l'image à en haut à droite et ajouter un margin de 10 px.
imag.style.position ="absolute"
imag.style.top ="0";
imag.style.right ="0";
imag.style.margin ="10px"
  //remplacer la couleur de fond de la div
  const background_div = document.querySelector("div");
  background_div.style.backgroundColor ="rgb(220, 220, 220)";




