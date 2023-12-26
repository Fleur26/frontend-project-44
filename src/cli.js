import readlineSync from 'readline-sync';

const namedGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${playerName}!`);
};

export default namedGreetings;
