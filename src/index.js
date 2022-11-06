const { calculatePrimerNumbersMultiplication, groupWordsByPrimerNumbersMultiplication } = require('./utils/anagram');
const { getTextFileData, areWordsOrderedByLength } = require('./utils/readFile');


const main = async () => {
    try{
        //Get filePath
        const txtFilePath = process.argv[2];
        const data = await getTextFileData(txtFilePath);
        
        const firstWord = data[0];
        const lastWord = data[data.length -1];
        
        const firstWordLength = firstWord.length;
        const lastWordLength = lastWord.length;

        if (!areWordsOrderedByLength(firstWord, lastWord)) throw {message: "Words should be ordered by length. Please check your file"}

        for(let i = firstWordLength; i<=lastWordLength; i++){
            let subData = data.filter(word => word.length === i);
            if(subData.length > 0) {
                const calculatedPrimeNumberMultiplication = calculatePrimerNumbersMultiplication(subData);
                const result = groupWordsByPrimerNumbersMultiplication(calculatedPrimeNumberMultiplication);
                // Formatting for output
                const wordsPerLengthValuesArray = Object.values(result);
                wordsPerLengthValuesArray.forEach(value => console.log(value.toString()))
            }

        }
    } catch(e){
        console.error("Error running Zurich Challenge:", e.message || e)
    }

}

main();