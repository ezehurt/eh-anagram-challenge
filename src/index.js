const { getTextFileData } = require('./utils/readFile');

const main = async () => {
    try{
        const txtFilePath = process.argv[2];
        const data = await getTextFileData(txtFilePath)
        console.log(data);
    } catch(e){
        console.error("Error running Zurich Challenge:", e.message || e)
    }

}

main();