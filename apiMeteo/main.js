/*Depuis la base de code ci-dessus récupérer :
température (main),
nom de la ville (name),
lat et long (coord)
Stocker ces valeurs dans des variables.
Dans page HTML vous allez ajouter des paragraphes,
injecter ces valeurs dans les paragraphes.
NB : utiliser les méthodes (createElement, appendChild, textContent).
Bonus : convertir la température en degrés celcius 
*/

const url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9";


    const apiMeteo= fetch(url)
                    .then((res) => res.json())
                        
                    .then((data) => {

                        displayMeteo(data)                        
                    })

               function displayMeteo(data) {
                
               
                    let temperature = data.main.temp;
                    const name = data.name;
                    const coord = data.coord;
                
                    
                    const pTempe = document.createElement("p");
                    const pName = document.createElement("p");
                    const pLat = document.createElement("p");
                    const pLon = document.createElement("p");
                    temperature = (temperature - 273.15).toFixed(2);
                

                    pTempe.textContent = "Température : " + temperature + " °C";
                    pName.textContent = "Nom de la ville : " + name;
                    pLat.textContent = "Latitude : " + coord.lat;
                    pLon.textContent = "Longitude : " + coord.lon;

                    
                    document.body.appendChild(pTempe);
                    document.body.appendChild(pName);
                    document.body.appendChild(pLat);
                    document.body.appendChild(pLon);
                }


    
    
    




   

                    