/**Partie HTML :
Ajouter dans la page les éléments suivants :
-1 input type text (id = email),
-1 input type password(id= password),
-1 input type button (id=bt)
Partie JS :
1 Ajouter un écouteur événement (keyup (touche clavier est relâchée )-> input (id= email) 
         -> vérifier si le contenu de l'input (id= email) match  le pattern suivant :
                   --
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         -> si le emailmatch le pattern mettre l'input (email) en vert (backgroundColor)
         -> sinon mettre l'input (email) en rouge(backgroundColor)
2 Ajouter un écouteur événement (blur(désélection de l'input)-> input (id= password) 
         -> vérifier si le contenu de l'input (id= password) match  le pattern suivant :
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;

         -> si le password match le pattern mettre l'input (password) en vert (backgroundColor)
         -> sinon mettre l'input (password) en rouge(backgroundColor)
Bonus : Ajouter un paragraphe (id = error)  dans la partie HTML :
Afficher à l'intérieur :
Si le password et l' email sont valides => valide,
Si le password ou l' email sont invalides => invalide ,
Utiliser test() plutôt que match() dans vos conditions. */

const checkEmail = document.querySelector("#email");
const checkPassword = document.querySelector("#password");

const error = document.querySelector("#error");


//  Écouter l'événement keyup sur l'input email
checkEmail.addEventListener("keyup", () => {
  // Vérifier si le contenu de l'input email match le pattern
  let email = checkEmail.value; 
 
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(email)) {
    // Si le email match le pattern, mettre l'input en vert
    checkEmail.style.backgroundColor = "green";
  } else {
    
    // Sinon, mettre l'input en rouge
    checkEmail.style.backgroundColor = "red";
  }
});

// Écouteur événement blur sur l'input password
checkPassword.addEventListener("blur", () => {
  // Vérifier si le contenu de l'input password match le pattern
let password = checkPassword.value;
  const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
  if (regexPassword.test(password)) {
    // Si le password match le pattern, mettre l'input en vert
    checkPassword.style.backgroundColor = "green";
  } else {
    // Sinon, mettre l'input en rouge
    checkPassword.style.backgroundColor = "red";
  }

  // Vérifier la validité du password et de l'email
 const isValid = email.style.backgroundColor === "green" && password.style.backgroundColor === "green";
  error.textContent = isValid ? "valide" : "invalide";
});
