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
]

console.log(techBrands)