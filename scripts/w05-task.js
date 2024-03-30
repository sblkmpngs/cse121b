/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach(temple => {
    const article = document.createElement('article');
    article.textContent = temple;
    templesElement.appendChild(article);

    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName
    article.appendChild(h3);

    const img = document.createElement('img');
    imageElement.setAttribute ('src', imageUrl);
    imageElement.setAttribute('alt',location);
    img.textContent = temple;
    article.appendChild(img);

  });
}

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