const fs = require('fs/promises');


/**
 * Given a filename returns the array of words inside the file. The words must be one per line.
 * @param {string} filename 
 * @return {Array} array
 */
const getTextFileData = (path) => {
    return new Promise(async(resolve,reject)=> {
        try {
            const data = await fs.readFile(path, { encoding: 'utf8' });
            resolve(data.split('\n'));
          } catch (err) {
            console.error("ERROR", err)
            reject(err);
          }
    });
}

/**
 * Given the first and last word, return true if last word is longer than first
 * @param {string} firstWord 
 * @param {string} lastWord 
 * @return {Boolean} 
 */
const areWordsOrderedByLength = (firstWord, lastWord) =>{
  return (firstWord.length > 0 && lastWord.length > 0) && lastWord.length >= firstWord.length
}

module.exports = { 
  getTextFileData,
  areWordsOrderedByLength
}
   
