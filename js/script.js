
/*Palindromo*/
//note: da mettere in lowercase  
const word = 'anna';
const parola = [];
const clone = [];
let i = 0;
let palindromo;
const verify = document.getElementById('btn-verifica');
const inputWord = document.getElementById('input-word');
const outputPalindromo = document.getElementById('output-palindromo');

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
	outputPalindromo.innerHTML = word + ' ' + palindromo;
	console.log(palindromo);
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
const messageOutput = document.getElementById('outputPariDispari');
const output = document.querySelector('h4');
let message;

play.addEventListener('click', function(){

	const userNumber = parseInt(inputNumber.value);
	const userOddEven = inputOddEven.value;
	const pcNumber = randomizer(1, 5);
	
	
	const sum = somma(userNumber, pcNumber);
	const sommaPariDispari = pariDispari(sum);

	if(sommaPariDispari == userOddEven) {
		message = ('Hai vinto!');
		console.log('Hai vinto');
	} else {
		message = ('Hai perso!');
		console.log('Hai perso');
	};
	
	
	console.log('sommaPariDispari: '+sommaPariDispari)
	console.log('userNumber: '+userNumber)
	console.log('userOddEven: '+userOddEven)
	console.log('pcNumber: '+pcNumber)
	console.log('sum: ' + sum);
	messageOutput.innerHTML = message;
	console.log('message: ' + message);
	output.innerHTML = `Il computer ha giocato il numero ${pcNumber} e la somma è ${sum}.`;
});
	
/**
 * Genera un numero random compresso tra min e max inclusi.
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function randomizer(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Somma il numA e numB
 * @param {number} numA 
 * @param {number} numB 
 * @returns 
 */
function somma(numA, numB){
	sum = numA + numB;
	return sum;
}

/**
 * Stabilisce se il numero è pari o dispari
 * @param {number} num 
 */
function pariDispari(num){
	if(num % 2 === 0){
		risultato = 'pari';
	} else {
		risultato = 'dispari';
	}	
	return risultato;

}
