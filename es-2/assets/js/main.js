/* Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const teams =  [
    {
        team: 'Inter',
        points: 0,
        fouls: 0,
    },
    {
        team: 'Atalanta',
        points: 0,
        fouls: 0,
    },
    {
        team: 'Milan',
        points: 0,
        fouls: 0,
    },
    {
        team: 'Monza',
        points: 0,
        fouls: 0,
    },
    {
        team: 'Cremonese',
        points: 0,
        fouls: 0,
    },
    {
        team: 'Verona',
        points: 0,
        fouls: 0,
    }
];

teams.forEach( ( data ) => {
    data.points = Math.floor(Math.random() * 100) + 1;
    data.fouls = Math.floor(Math.random() * 100) + 1;
});

const teamFouls = teams.map( ( {team, fouls} ) => 
    ({team, fouls}));
     
console.log(teamFouls)
 
