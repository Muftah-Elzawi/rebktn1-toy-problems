// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.

// In this system, the last digit is always 0 and is in base 0!.
// The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!.

// More generally, the nth-to-last digit is always 0, 1, 2, ..., or n and is in base n!.
// Example :

// decimal number 463 is coded as "341010":

// 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!

// If we are limited to digits 0...9 the biggest number we can code is 10! - 1.

// So we extend 0..9 with letters A to Z. With these 36 digits we can code up to

// 36! − 1 = 37199332678990121746799944815083519999999910 (base 10)

// We will code two functions. The first one will code a decimal number and return a string with the factorial representation : dec2FactString(nb)

// The second one will decode a string with a factorial representation and produce the decimal representation : factString2Dec(str).

// Given numbers will be positive.
class Stack {
	constructor(){
		this._storage = {}
		this._size = 0
	}
	push(nb){
		this._storage[this._size] = nb
		this._size ++
	}
	pop(){
		if (this._size === 0) {
			return;
		}
		var pupedValue = this._storage[this._size];
		delete this._storage[this._size];
		return pupedValue;
	}
	peek (){
		return this._storage[this._size];
	}
}
dicemToBin = (nb , stack)=> {
	stack = stack || new Stack()
	// console.log(Math.floor(nb / 2 ));
	if (nb === 1) {
		stack.push(1);
	}
	if (Math.floor(nb / 2 ) === 0) {
		return;
	}
	stack.push(nb % 2);
	// console.log(nb, nb % 2)
	dicemToBin(Math.floor(nb / 2 ), stack);
	return stack;
}
facToDicem = (nb , stack, redix)=> {
	redix = redix || 1
	stack = stack || new Stack()
	// console.log(Math.floor(nb / redix ));
	// if (nb === 1) {
	// 	stack.push(1);
	// }
	if (Math.floor(nb / redix ) === 0) {
		stack.push(nb);
		return;
	}
	stack.push(nb % redix);
	console.log(nb, redix)
	facToDicem(Math.floor(nb / redix ), stack, ++redix);
	return stack;
}
dicToFac = (string)=> {
	let  arr = []
for (let i = 0; i < string.length; i++) {
	arr.push(parseInt(string[i]) * fac(i))
}
}
fac = (nb)=> {
	if (nb === 0) {
		return 1
	}
	return nb * fac(--nb)
}