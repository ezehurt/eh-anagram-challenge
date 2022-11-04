const { getWordPrimerNumberMultiplication, isAnagram } = require('../../src/utils/anagram');


test('Should return word multiplication result equal to 83 * 47 * 61 * 7 = 1665727', async () => {
    const word = "word";
    const expectedOutput = 1665727;
    const result = getWordPrimerNumberMultiplication(word);
    console.log("result", result)
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