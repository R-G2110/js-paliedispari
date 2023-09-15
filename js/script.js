
/*Palindroma*/
//note: da mettere in lowercase  
const word = 'anna';
const parola = [];
const clone = [];
let i = 0;
let palindromo = false;

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
		palindromo = true;
	} else palindromo = false;
	
}

console.log(palindromo);

/* Pari o Dispari*/


