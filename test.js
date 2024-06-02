// test.js

// Import assertion library
const assert = require('assert');

// Import variables from index.js
const {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
} = require('./index');

// Test currentUser variable
assert.strictEqual(currentUser, 'Grace Hopper', 'currentUser is not defined correctly');

// Test welcomeMessage variable
assert.strictEqual(welcomeMessage, 'Welcome to Flatbook, Grace Hopper!', 'welcomeMessage is not defined correctly');

// Test excitedWelcomeMessage variable
assert.strictEqual(excitedWelcomeMessage, 'WELCOME TO FLATBOOK, GRACE HOPPER!', 'excitedWelcomeMessage is not defined correctly');

// Test shortGreeting variable
assert.strictEqual(shortGreeting, 'Welcome, G!', 'shortGreeting is not defined correctly');

// Log success message if all tests pass
console.log('All tests passed successfully!');
