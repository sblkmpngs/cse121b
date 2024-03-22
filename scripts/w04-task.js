/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : 'Sabelo K. Mpungose',
    photo : 'images/photo.jpg',
    favoriteFoods :[
        'Pap' , 
        'Hot Chakalaka' ,
        'Steak' , 
        'Boerewors' ,
        'Peppermint Chocolate Cake'
    ],
    hobbies : [
        'Video Games',
        'Music',
        'T.V Shows'
    ],
    placesLived : [],

}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : 'Johannesburg, South Africa',
        length : '6 years'
    },
    {
        place : 'Newcastle, South Africa',
        length : '18 years' 
    },
    {
        place : 'Durban, South Africa',
        length : '4 years' 
    }
);
console.log(myProfile.placesLived);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = `Profile picture of ${myProfile.name}`;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    dt.textContent = placesLived.place
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = placesLived.length
    document.querySelector('#places-lived').appendChild(dd);
});
