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

let palindromo;
const verify = document.getElementById('btn-verifica');
const resetPalindromo = document.querySelector('#palindromo .btn-reset');
const inputWord = document.getElementById('input-word');
const outputPalindromo = document.getElementById('output-palindromo');

verify.addEventListener('click', function(){
	const word = inputWord.value;
	
	if (verificaDati(word)){
		palindromo = verificaParolaPalindroma(word);
	} else {
		palindromo = 'Attenzione!!! non hai inserito nessuna parola!!!';
	}

	outputPalindromo.classList.remove('d-none');
	outputPalindromo.innerHTML = word + ' ' + palindromo;
	
});

//Resetta il dato inserito (parola) e nasconde il messaggio del risultato
resetPalindromo.addEventListener('click', function (){
	inputWord.value = '';
	outputPalindromo.classList.add('d-none');
});
/*************************************************************************/
/*************************************************************************/
/*************************************************************************/
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

	if(verificaDati(userNumber) && verificaDati(userOddEven)){
		const pcNumber = randomizer(1, 5);
		const sum = somma(userNumber, pcNumber);
		const sommaPariDispari = pariDispari(sum);

		message = printMessageVinto(vintoPariDispari(sommaPariDispari, userOddEven));
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
/************************************************************************/
/************************************************************************/
/**************************FUNCTIONS********************************/
/**
 * Verifica la stringa se è palindroma e resituisce uno dei messaggi:
 * 1. è una parola palindroma
 * 2. non è una parola palindroma
 * @param {string to be verified} string 
 * @returns 
 */
function verificaParolaPalindroma (string){
	let condition = true;
	let result;

	for(let i = 0; i < string.length && condition; i++){
		if (string.charAt(i) === string.charAt((string.length - 1) - i)){
			condition = true;
		} else  {
			condition = false;
		}
	};
	if (condition) result = 'è una parola palindroma!';
	else result = 'non è una parola palindroma!';
	
	return result;
}

/**
 * Verifica se il dato inserito = null,  restituisce t/f 
 * @param {data inserted} data 
 */
function verificaDati(data){
	
	if(data.trim() === "") result = false;
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
function printMessageVinto(result){
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
