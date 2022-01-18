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


//recuperare gli elementi che ci servono della pagina
const difficultyElement = document.getElementById('difficulty');
const gridElement = document.getElementById('grid');
const buttonElement = document.getElementById('play');

//costanti difficoltà
const numbHard = 100;
const numbMedium = 81;
const numbLow = 49;

//creare una funzione a una select per determinare le difficoltà
difficultyElement.addEventListener('change', function () {
    const difficultyValue = difficultyElement.value;

    gridElement.innerHTML = '';

    if (difficultyValue === 'hard') {
        //GENERO 100 GRIGLIE IN PAGINA
        for (let i = 0; i < numbHard; i++) {
            const cell = addCell();
            //aggiungo la classe all'elemento
            cell.classList.add('cell-100');

            //inserisco l'elemento div dentro al genitore di classe grid
            gridElement.appendChild(cell);
            cell.setAttribute('id', i + 1);
            cell.innerText = i + 1;

            //creo funzione che al click aggiunge o rimuove la classe 'click-cell'
            cell.addEventListener('click', function () {
                cell.classList.toggle('click-cell');
            })
        }

    } else if (difficultyValue === 'medium') {

        //GENERO 81 GRIGLIE IN PAGINA
        for (let i = 0; i < numbMedium; i++) {
            const cell = addCell();

            //aggiungo la classe all'elemento
            cell.classList.add('cell-81');

            //inserisco l'elemento div dentro al genitore di classe grid
            gridElement.appendChild(cell);
            cell.setAttribute('id', i + 1);
            cell.innerText = i + 1;

            //creo funzione che al click aggiunge o rimuove la classe 'click-cell'
            cell.addEventListener('click', function () {
                cell.classList.toggle('click-cell');
            })
        }

    } else {
        //GENERO 49 GRIGLIE IN PAGINA
        for (let i = 0; i < numbLow; i++) {
            const cell = addCell();

            //aggiungo la classe all'elemento
            cell.classList.add('cell-49');

            //inserisco l'elemento div dentro al genitore di classe grid
            gridElement.appendChild(cell);
            cell.setAttribute('id', i + 1);
            cell.innerText = i + 1;

            //creo funzione che al click aggiunge o rimuove la classe 'click-cell'
            cell.addEventListener('click', function () {
                cell.classList.toggle('click-cell');
            })
        }
    }
}