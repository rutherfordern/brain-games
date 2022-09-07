import readlineSync from 'readline-sync';

export const welcomeQuestion = () => {
    console.log('Welcome to the Brain Games!');
    
    let name = readlineSync.question('May I have your name?\n');
    console.log("Hello, dear " + name + "!");
};
