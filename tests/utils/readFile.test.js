const { getTextFileData, areWordsOrderedByLength } = require('../../src/utils/readFile');

test('Should read example1 data successfully', async () => {
    const result = await getTextFileData("data/example1.txt");
    const expectedOutput = [
        'ful',      'gob',
        'obg',      'lfu',
        'bog',      'bgo',
        'tennis',   'football',
        'llootbfa'
      ];
    expect(result).toEqual(expectedOutput)
});

test('Should true if last word is shorter than first', async () => {
  const firstWord = "hi";
  const lastWord = "by"
  expect(areWordsOrderedByLength(firstWord, lastWord)).toEqual(true)
});

test('Should false if last word is shorter than first', async () => {
  const firstWord = "bye";
  const lastWord = "hi"
  expect(areWordsOrderedByLength(firstWord, lastWord)).toEqual(false)
});

test('Should false a word is empty', async () => {
  const firstWord = "";
  const lastWord = "by"
  expect(areWordsOrderedByLength(firstWord, lastWord)).toEqual(false)
});

test('Should false if a word is a line break', async () => {
  const firstWord = "";
  const lastWord = "\n"
  expect(areWordsOrderedByLength(firstWord, lastWord)).toEqual(false)
});