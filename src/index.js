module.exports = function reverse (n) {
	let stringNum = Math.abs(n).toString();
	let reverseNum = '';
	
	for (let i = stringNum.length - 1; i >= 0; i--) {
		reverseNum += stringNum[i];
	}

  return reverseNum;
}
