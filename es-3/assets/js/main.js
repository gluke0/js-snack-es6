/* Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array generato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */

// numero random tra max e min
let rNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const techBrands = [
    'Apple',
    'Google',
    'Microsoft',
    'Bose',
    'Leica',
    'Meta',
    'Oracle'
];

let min,  max;
let check = true; 
do {

    alert(`SCEGLI DUE NUMERI DA 0 A ${techBrands.length - 1} LASCIANDO ALMENO UN NUMERO TRA DI ESSI`);

    min = parseInt(prompt('Primo Numero'));
    max = parseInt(prompt('Secondo Numero'));

    if (min < max && min >= 0 && max <= techBrands.length - 1) {
        check = false;
    } else {
        alert('mi dispiace ma devi inserire dei nuovi numeri... PS: prova ad avere il numero minore al primo posto');
    }

} while (check);

// filtro
let portion = techBrands.filter( (x, i) => {
    return i > min && i < max
});

// stampo in pagina
document.querySelector(".stampa").innerHTML = 
`<div> ${portion.join(', ')} </div>`