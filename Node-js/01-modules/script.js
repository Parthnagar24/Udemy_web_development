const fs= require('node:fs')

//Task : Read the contents of notes.txt

console.log('Start of script');

// Sync =>Blocking Operations
const content= fs.readFileSync('notes.txt','utf-8')

console.log(content);

console.log('End of script');