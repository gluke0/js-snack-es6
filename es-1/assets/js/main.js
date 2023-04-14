/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

let bikes = [
    {
      brand: "Pierina",
      material: "Bamboo",
      weight: 8
    },
    {
      brand: "Mariolina",
      material: "Plastica",
      weight: 9
    },
    {
      brand: "Graziella",
      material: "Grafene",
      weight: 7
    },
    {
      brand: "Carolinella",
      material: "Ferro",
      weight: 10
    },
    {
      brand: "Pesantella",
      material: "Ghisa",
      weight: 22
    }
  ];

let lightBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
  let {weight} = bikes[i]; 
  if (weight < lightBike.weight) {
    lightBike = bikes[i];
  }
}

// destructuring per stampare in pagina
let {brand, material, weight} = lightBike;

// stampo in pagina
document.querySelector(".bike").innerHTML = 
`<div> tra le bici ancora disponibili per la vendita quella più leggera è: </div>
<ul>
    <li> <strong>Brand</strong>: ${brand} </li>
    <li> <strong>Materiale</strong>: ${material} </li>
    <li> <strong>Peso</strong>: ${weight} KG </li>
</ul>
`