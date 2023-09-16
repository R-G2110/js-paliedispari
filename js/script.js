/*BOTTONI INIZIALI*/

const verificaPalindromo = document.getElementById('btn-palindromo');
const giocoPariDispari = document.getElementById('btn-pari-dispari');
const palindromoCard = document.getElementById('palindromo');
const pariDispariCard = document.getElementById('pari-dispari');
const bodyBackground = document.querySelector('body');

//BOTTONE PALINDROMO
verificaPalindromo.addEventListener('click', function (){
	palindromoCard.classList.remove('d-none');
	pariDispariCard.classList.add('d-none');
});

//BOTTONE PARI O DISPARI
giocoPariDispari.addEventListener('click', function (){
	palindromoCard.classList.add('d-none');
	pariDispariCard.classList.remove('d-none');
});

/*Palindromo*/
//note: da mettere in lowercase  
const parola = [];
const clone = [];
// let i = 0;
let palindromo;
const verify = document.getElementById('btn-verifica');
const inputWord = document.getElementById('input-word');
const outputPalindromo = document.getElementById('output-palindromo');
const resetPalindromo = document.querySelector('#palindromo .btn-reset');

verify.addEventListener('click', function(){
	let i = 0;
	const word = inputWord.value;
	for(let i = 0; i < word.length; i++){
		parola[i] = word.charAt(i);
		console.log('parola: ' + parola);
	};
	for(let c = (word.length-1); c >= 0 ; c--){
		clone[i] = word.charAt(c);
		console.log('clone: ' + clone);
		i++;
	};
	for (let i = 0; i < word.length; i++){
		if (parola[i] === clone[i]) {
			palindromo = 'è una parola palindroma';
		} else {
			palindromo = 'non è una parola palindroma';
		}
		
	}
	outputPalindromo.classList.remove('d-none');
	outputPalindromo.innerHTML = "'" + word +"'" + ' ' + palindromo;
	console.log(palindromo);
});

//Resetta il dato inserito (parola) e nasconde il messaggio del risultato
resetPalindromo.addEventListener('click', function (){
	inputWord.value = '';
	outputPalindromo.classList.add('d-none');
});

// for(let i = 0; i < word.length; i++){
// 	parola[i] = word.charAt(i);
// 	console.log('parola: ' + parola);
// };

// for(let c = (word.length-1); c >= 0 ; c--){
// 	clone[i] = word.charAt(c);
// 	console.log('clone: ' + clone);
// 	i++;
// };

// for (let i = 0; i < word.length; i++){
// 	if (parola[i] === clone[i]) {
// 		palindromo = true;
// 	} else palindromo = false;
	
// }

// console.log(palindromo);

/************************************************************* */
// const word = 'onna';
// let palindromo = false;
// let loop = true;
// let contatore = 0;
// while(loop){
// 	let inizio = contatore;
// 	let fine = word.length - 1 - contatore;

// 	if(inizio === fine || inizio > fine){
// 		loop = false;
// 	}else{
// 		if(word.charAt(inizio) === word.charAt(fine)){
// 			palindromo = true;
// 		}else{
// 			palindromo = false;
// 			loop = false;
// 		}
// 		contatore++;
// 	}
// }
// const verify = document.getElementById('btn-verifica');
// const inputWord = document.getElementById('input-word');
// let palindromo = false;

// verify.addEventListener('click', function(){
// 	const word = inputWord.innerHTML;
// 	for (let i = 0; i < word.length; i++){
// 		if (inputWord.charAt(i) === word.charAt((word.length - 1) - i)){
// 			palindromo = true;
// 		} else {
// 			palindromo = false;
// 		}
// 	}
// });



// console.log(palindromo);



/*********************************************************************** */
/* Pari o Dispari*/
const play = document.getElementById('btn-play');
const inputNumber = document.getElementById('input-number');
const inputOddEven = document.getElementById('input-odd-even');
const messageOutput = document.getElementById('output-pari-dispari');
const output = document.querySelector('h4');
const resetPariDispari = document.querySelector('#pari-dispari .btn-reset');

play.addEventListener('click', function(){

	const userNumber = inputNumber.value;
	const userOddEven = inputOddEven.value;
	let message;

	if(verificaDati(userNumber, userOddEven)){
		const pcNumber = randomizer(1, 5);
		const sum = somma(userNumber, pcNumber);
		const sommaPariDispari = pariDispari(sum);

		message = printMessage(vintoPariDispari(sommaPariDispari, userOddEven));
		output.classList.remove('d-none');
		output.innerHTML = `Il computer ha giocato il numero ${pcNumber} e la somma è ${sum}.`;	
	} else {
		message = ('Attenzione!!! hai dimenticato di inserire uno o più dati!!');
	}
		messageOutput.classList.remove('d-none');	
		messageOutput.innerHTML = message;
});

//Resetta i dati inseriti (numero, pari o dispari) e nasconde il messaggio del risultato
resetPariDispari.addEventListener('click', function (){
	inputNumber.value = '';
	inputOddEven.value = '';
	messageOutput.classList.add('d-none');
	output.classList.add('d-none');
});

/**************************FUNCTIONS********************************/
/**
 * Verifica se i dati inseriti = null,  restituisce t/f
 * @param {number inserted} number 
 * @param {option inserted} option 
 */
function verificaDati(number, option){
	if(number === "" || option === "" ) result = false;
	else result = true;
	return result;
};

/**
 * Stampa i messaggi corrispondenti:
 * True: 'Hai vinto!'
 * False: 'Hai perso!'
 * @param {boolean(t/f) resultPariDispari} result 
 * @returns 
 */
function printMessage(result){
	if (result){
		message = ('Hai vinto!');
	} else message = ('Hai perso!');
	return message;
};

/**
 * Verifica se la sommaPariDispari è uguale alla scelta dell'utente e resituisce v/f
 * @param {options: 'pari' or 'dispari'} sommaPariDispari 
 * @param {options: 'pari' or 'dispari'} sceltaPariDispari 
 * @returns 
 */
function vintoPariDispari(sommaPariDispari, sceltaPariDispari){
	let result = false;
	if (sommaPariDispari === sceltaPariDispari){
		result = true;
	}
	return result;
};

/**
 * Genera un numero random compresso tra min e max inclusi.
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function randomizer(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Somma il numA e numB e restituisce la somma
 * @param {number} numA 
 * @param {number} numB 
 * @returns 
 */
function somma(numA, numB){
	sum = parseInt(numA) + parseInt(numB);
	return sum;
};

/**
 * Stabilisce se il numero è pari o dispari e restituisce il valore 'pari' o 'dispari'.
 * @param {number} num 
 */
function pariDispari(num){
	if(num % 2 === 0){
		risultato = 'pari';
	} else {
		risultato = 'dispari';
	}	
	return risultato;

};
