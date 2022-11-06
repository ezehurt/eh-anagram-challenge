const { getWordPrimerNumberMultiplication,
    isAnagram,
    calculatePrimerNumbersMultiplication,
    groupWordsByPrimerNumbersMultiplication
} = require('../../src/utils/anagram');


test('Should return word multiplication result equal to 83 * 47 * 61 * 7 = 1665727', async () => {
    const word = "word";
    const expectedOutput = 1665727;
    const result = getWordPrimerNumberMultiplication(word);
    expect(result).toEqual(expectedOutput)
});

test('Should return true isAnagram', async () => {
    const word1 = "roma";
    const word2 = "amor";
    const word3 = "mora";
    expect(isAnagram(word1, word2)).toEqual(true);
    expect(isAnagram(word1, word3)).toEqual(true);

});

test('Should return false isAnagram', async () => {
    const word1 = "roma";
    const word2 = "amol";
    expect(isAnagram(word1, word2)).toEqual(false)
});

test('Should an object with the calculate prime numbers multiplication', async () => {
    const words = ["word", "dwor"];
    const calculatedPrimerNumberArray = calculatePrimerNumbersMultiplication(words);
    expect(calculatedPrimerNumberArray).toEqual([{ word: "word", key: 1665727 }, { word: "dwor", key: 1665727 }])
});


test('Should group words by key', async () => {
    const words = [{ word: "word", key: 1665727 }, { word: "dwor", key: 1665727 }, { word: "ful", key: 35113 }, { word: "lfu", key: 35113 } ]
    expect(groupWordsByPrimerNumbersMultiplication(words)).toEqual({ '1665727': [ 'word', 'dwor' ], '35113': [ 'ful', 'lfu' ] })
});
