function translateToPigLatin(corpus) {
	const tokens = tokenize(corpus);
	return tokens
		.map(wordToPigLatin)
		.join(" ");
}

function tokenize(corpus) {
	return corpus
		.toLowerCase()
		.replace(/!|,|\?|\./g, "")
		.split(/\s/g);
}

function wordToPigLatin(word) {
	const consonantCluster = word
		.split("")
		.reduce((acc, cur, i, arr) => {
			if (isCharVowel(cur)) {
				arr.splice(1);
				return acc;
			} else return acc + cur;
		}, "");
	const begIndex = consonantCluster.length;
	return (consonantCluster.length == 0) ?
		`${word}way` :
		`${word.substring(begIndex)}${consonantCluster}ay`;
}

function isCharVowel(string, index = 0) {
	const regressionParams = [-219852, 14949.7, -405.72, 5.493, -0.0371, 0.0001];
	const x = string.toUpperCase().charCodeAt(index);
	const y = regressionParams.reduce((sum, param, i) => sum += Math.pow(x, i) * param, 0);
	console.log({y});
	return y == 0;
}
