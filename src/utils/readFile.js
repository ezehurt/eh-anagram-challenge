const fs = require('fs/promises');

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

module.exports = { getTextFileData }
   
