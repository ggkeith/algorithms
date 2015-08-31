function squareDigits(num) {
	return num.split('').map(function(el) {
		return (+el * +el);
	}).join('');
}