function calculer(){
  let nombre = document.querySelector("#quantite").value;
//variable pour stocker 
let total = 0;

//test si nombre est inférieur ou égal à 10
if(nombre <=10 && nombre >0){
    total = nombre * 1.4;
}
//test si nombre est inférieur ou égal à 20
else if(nombre <=20){
    total = 14 + ((nombre-10)*1.30);
    //version avec le calcul du prix des 10 premières
    //total = (10*1.4)+((nombre-10)*1.30);
}
//test si nombre est supérieur à 20
else if(nombre >20){
    total = 27 + ((nombre - 20) *1.20);
    //version avec le calcul du prix des 20 premières
    //total =(10*1.4) +(10*1.3)+ ((nombre - 20) *1.20);
}
//test si le nombre est négatif
else{
    total = "Saisir un nombre positif";
}
//version avec isNaN (test si ce n'est pas un nombre )
console.log(!isNaN(total)?"Le prix total est égal à "+total.toFixed(2)+" €":total);
}
