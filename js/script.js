/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
*/




//* FUNZIONI DA UTILIZZARE

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;



//RECUPERO ELEMENTI
const difficultyElement = document.getElementById('difficulty');
const gridElement = document.getElementById('grid');
const buttonElement = document.getElementById('play');
const mainElement = document.getElementById('main-grid');

buttonElement.addEventListener('click', function () {
    //cambio testo al bottone
    buttonElement.innerText = 'RIGIOCA';

    //faccio il reset della griglia
    gridElement.innerHTML = '';

    let attempts = 0;
    const TOTAL_BOMBS = 16;

    const level = document.getElementById('difficulty').value;

    let totalCells;
    let cellsRows;

    //collego il valore della select con la quantità di celle
    switch (level) {
        case 'low':
            totalCells = 100;
            break;
        case 'hard':
            totalCells = 49;
            break;
        default:
            totalCells = 81;
            break;
    };

    //calcolo la radice quadrata del numero
    cellsRows = Math.sqrt(totalCells);


    //calcolo il punteggio massimo
    const maxAttempts = totalCells - TOTAL_BOMBS;

    //genero numeri casuali
    const generateBombs = (totalBombs, totalNumbers) => {
        const bombs = [];
        while (bombs.length < totalBombs) {
            const randNumber = getRandomNumber(1, totalNumbers);
            if (!bombs.includes(randNumber)) bombs.push(randNumber);
        }
        return bombs;
    };


    //genero celle
    const generateCell = (number, cellsRows) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = number;
        const wd = `calc(100% / ${cellsRows})`;
        cell.style.width = wd;
        cell.style.height = wd;
        return cell;
    };




    //rimuovo eventListener da tutte le celle
    const disableCell = (cell) => {
        const clone = cell.cloneNode();
        clone.innerText = cell.innerText;
        clone.classList.add('cell-disable');
        cell.parentNode.replaceChild(clone, cell);

        return clone;
    }




    //fine partita 
    const gameOver = (bombs, point, hasLost) => {

        showBombs(bombs);

        const messageElement = document.createElement('h3');
        messageElement.className = 'message';


        //messaggi di fine partita
        let message;

        if (hasLost) {
            message = `HAI PERSO! HAI FATTO ${point}`;
        } else {
            message = `HAI VINTO!`
        }

        messageElement.innerText = message;

        mainElement.appendChild(messageElement);
    };



    //gestione click cella
    //non fa cliccare se già cliccata
    const onCellClick = (clickedCell, bombs, number) => {
        
        const disabledCell = disableCell(clickedCell);
        //clickedCell.removeEventListener('click', onCellClick);

        //controllo se è una bomba
        if (bombs.includes(number)) {
            gameOver(bombs, attempts, true);
        } else {
            clickedCell.classList.add('click-cell');
            attempts++;

            if (attempts === maxAttempts) {
                gameOver(bombs, attempts, false);
            };
        }
    };



    //mostra le bombe e blocca il click
    const showBombs = (bombs) => {

        const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            const disabledCell = disableCell(cell)
            const cellNumber = parseInt(disabledCell.innerText);
            cell.removeEventListener('click', onCellClick);
            if (bombs.includes(cellNumber)) disabledCell.classList.add('cell-bomb');
        }
    };



    //genero griglia
    const gridGenerate = (cellsNumbers, cellsRows, bombs) => {
        for (let i = 1; i <= cellsNumbers; i++) {
            const cell = generateCell(i, cellsRows);
            cell.addEventListener('click', (e) => onCellClick(e.target, bombs, i));
            grid.appendChild(cell);

        }

    };



    const bombs = generateBombs(TOTAL_BOMBS, totalCells);
    console.log(bombs);
    gridGenerate(totalCells, cellsRows, bombs);




})



