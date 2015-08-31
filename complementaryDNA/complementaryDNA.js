//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA; you need to get the other complementary side. DNA strand is never empty or there is no DNA at all.

function DNAStrand(dna){
  //split dna strand into individual chars
	var splitDNA = dna.split('');
	//iterate over chars
	console.log(splitDNA);
	splitDNA.replace('A', 'T');
	splitDNA.replace('C', 'G');
	splitDNA.replace('T', 'A');
	splitDNA.replace('G', 'C');
	
	return splitDNA.join('');
	
/*	for (var i = 0; i < splitDNA.length; i++) {
		//return complementary chars for each provided char
		if (splitDNA[i] === 'A') {
			return 'T';
		} else if (splitDNA[i] === 'C') {
			return 'G';
		} else if (splitDNA[i] === 'T') {
			return 'A';
		} else if (splitDNA[i] === 'G') {
			return 'C';
		}
	} */
	//join chars back into full complementary dna strand
}