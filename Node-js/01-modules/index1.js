const fs =require('node:fs')

const content = fs.readFileSync('notes.txt','utf-8')


fs.writeFileSync('copy.text', content, 'utf-8')

fs.appendFileSync('copy.text', "I want to write", 'utf-8')

fs.mkdirSync('games')

console.log(content);
