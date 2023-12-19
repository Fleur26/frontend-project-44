import readlineSync from 'readline-sync';

const namedGreetings = () => {
const playerName = readlineSync.question('May i have your name? ');
console.log(`Hello, ${playerName}!`);
}

export {namedGreetings};