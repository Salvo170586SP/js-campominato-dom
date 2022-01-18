console.log('js ok');

/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
- abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

BONUS:
1- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
*/

//SEZIONE ELEMENTI PAGINA//
//prendo il bottone
const buttonElement = document.getElementById('play');
const difficultyElement = document.getElementById('difficulty');
const gridElement = document.getElementById('grid');

//AGGANCIO EVENTO AL BOTTONE
buttonElement.addEventListener('click', function () {
    console.log('click');
    //cambio il testo al click del bottone
    buttonElement.innerText = 'RICOMINCIA';

    //collego i valori della select al bottone
    const difficultyValue = difficultyElement.value;
    console.log(difficultyValue);

    //svuota la griglia del gioco di default
    gridElement.innerHTML = '';

    //costante numero bombe
    const bombNumber = 16;
    //variabile punteggio
    let point = 0;

    
    //calcolo le celle in base alla difficoltà
    let cells;
    let cellRow;

    switch (difficultyValue) {
        case 'low':
            cells = 100;
            cellRow = 10;
            break;
        case 'medium':
            cells = 81;
            cellRow = 9;
            break;
        default:
            cells = 49;
            cellRow = 7;
            break;
    }


})