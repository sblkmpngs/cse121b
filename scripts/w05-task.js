/* W05: Programming Tasks */
/* Declare and initialize global variables */
templesElement = document.getElementById('temples');
const templesElement = document.querySelector('temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = async (temples) => { temples.forEach(temple => { let templeElement = document.createElement('div'); templeElement.textContent = temple.name; templesElement.appendChild(templeElement); }); };

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
  const templeList = await response.json();
  doStuff(templeList);
}
function doStuff(templeList) {
  results = templeList;
  console.log("first: ", results);
}
getTemples();
console.log("second: ", results);
/* reset Function */
const reset = () => {
  templesElement.innerHTML = " ";
}

/* filterTemples Function */
function filterTemples(temples){
  const reset = () => {
    templesElement.innerHTML = " ";
}
  let filter = document.querySelector('#filtered').value;
  switch (filter) {
    case 4:
      
      break;
  
    default:
      break;
  }
}
    displayTemples(temples.filter(temple => temple.location.includes("utah")));
    displayTemples(temples.filter(temple => temple.location.includes("notutah")));
    let older = temples.filter(Date(1950));
    document.querySelector('older').textContent = older.split(', ');
    document.querySelector('all').textContent;
  



/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)});

getTemples();

