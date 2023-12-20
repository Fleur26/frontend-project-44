import readlineSync from 'readline-sync';

const namedGreetings = () => {
  const playerName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${playerName}!`);
};

export default namedGreetings; // remove the default export when there are more exports
