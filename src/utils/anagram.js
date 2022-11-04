const characterToPrimeNumber = {
    'a': 2,
    'b': 3,
    'c': 5,
    'd': 7,
    'e': 11,
    'f': 13,
    'g': 17,
    'h': 19,
    'i': 23,
    'j': 29,
    'k': 31,
    'l': 37,
    'm': 41,
    'n': 43,
    'o': 47,
    'p': 53,
    'q': 59,
    'r': 61,
    's': 67,
    't': 71,
    'u': 73,
    'v': 79,
    'w': 83,
    'x': 89,
    'y': 97,
    'z': 101,
}

/**
 * Given a word (a-z) returns the multiplication of the corresponding prime numbers of each character.
 * @param {string} word 
 * @return {number} multiplicationResult
 */
const getWordPrimerNumberMultiplication = (word) => {
    const initialValue = 1;
    const trimmedWord = word.trim();
    const charactersArray = Array.from(trimmedWord);
    const primeNumbersArray = charactersArray.map(character => characterToPrimeNumber[character]);
    return primeNumbersArray.reduce(
        (previousValue, currentValue) => previousValue * currentValue,
        initialValue
      );
}

/**
 * Given two words (a-z) returns if they are anagrams.
 * @param {string} word1
 * @param {string} word2
 * @return {Boolean} ComparationResult
 */
 const isAnagram = (word1, word2) => {
   return getWordPrimerNumberMultiplication(word1) === getWordPrimerNumberMultiplication(word2)
}

module.exports = {
    getWordPrimerNumberMultiplication,
    isAnagram
}