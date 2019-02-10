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
	const gimmeCharCode = string.toUpperCase().charCodeAt(index);
	return "65,69,73,79,85".includes(`${gimmeCharCode}`);
}
