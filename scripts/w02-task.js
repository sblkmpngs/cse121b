/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Sabelo K. Mpungose';
let currentYear = '2024';
let profilePicture = 'images/IMG-20230924-WA0008.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear = document.querySelector('#year').textContent;
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute('alt',`Profile picture of Sabelo K. Mpungose`);



/* Step 5 - Array */
const favoriteFoods = [ 'Pap' , 'Hot Chakalaka' , 'Steak' , 'Boerewors' , 'Peppermint Chocolate Cake' ];
foodElement.innerHTML = `<string>${favoriteFoods}</string>`;
const favfoods = favoriteFoods.push('Greek Salad');
console.log(favoriteFoods);
foodElement.innerHTML += `<br>${favoriteFoods}`;
const firstElement = favoriteFoods.shift();
console.log(favoriteFoods);
foodElement.innerHTML += `<br>${favoriteFoods}`;
const lastElement = favoriteFoods.pop();
console.log(favoriteFoods);
foodElement.innerHTML += `<br>${favoriteFoods}`;











