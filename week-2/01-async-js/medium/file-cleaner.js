const fs = require('fs');

async function readFile(filename) {
    try {
        const data = await fs.promises.readFile(filename, { encoding: 'utf-8' });
        //console.log(data);
        return [filename, data];
    }
    catch(error) {
        console.log(error.message);
    }
}

async function writeFile(arr) {
    try {
        const data = arr[1].replace(/\s+/g, ' ');
        await fs.promises.writeFile(arr[0], data);
        console.log("success!");
    }
    catch(error) {
        console.log(`${error.message}`)
    }
}

readFile('file.txt').then(writeFile);