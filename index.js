// Write yoleur code in this file!

const currentUser = 'Bruno Kiptoo';

const welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;


const order = 'cheeseburger';

let ingredients; 
if (order === 'cheeseburger'){
    ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
}
else if (order === 'humburger'){
    ingredients = 'bun, burger, lettuce, tomato, onion';

}
else if (order === 'malted'){
ingredients = 'milk, ice cream, malted milk powder';
}
else {
    console.log("Sorry, that's not on the menu right now.");
}
