const { getTextFileData } = require('../../src/utils/readFile');


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