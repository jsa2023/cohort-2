
//URL: https://kinsta.com/knowledgebase/nodejs-fs/

//WRITE TO A FILE
const { writeFile } = require('fs/promises');

async function writeToFile(fileName, data) {
    try {
        await writeFile(fileName, data);
        console.log(`wrote data to ${fileName}`);
    }
    catch(error) {
        console.log(`Got an error trying to write to file: ${error.message}`);
    }
}

//writeToFile('friends.txt', 'Bob');

//APPEND TO A FILE
const { appendFile} = require('fs/promises');

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: 'w' });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: {error.message}`);
  }
}

//appendToFile('activities.txt', 'Skiing');

// CREATE AND WRITE

const { open} = require('fs/promises');

async function openFile(fileName, data) {
  try {
    const file = await open(fileName, 'w');
    await file.write(data);
    console.log(`Opened file ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to open the file: {error.message}`);
  }
}

//openFile('tasks.txt', 'Do homework');


//REZD A FILE

const { readFile } = require('fs/promises');
async function readThisFile(filePath) {
  try {
    const data = await readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: {error.message}`);
 }
}

async function executeInThisOrder() {
    await appendToFile('activities.txt', 'Skiing');
    await writeToFile('friends.txt', 'Bob');
    await openFile('tasks.txt', 'Do homework');
    await readThisFile('activities.txt');
    await readThisFile('friends.txt');
    readThisFile('tasks.txt');
}

executeInThisOrder();