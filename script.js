// BY ID

const mainContainer = document.getElementById('main-container');
mainContainer.style.border = '2px solid red'; // Puts a red border around the main div

const itemList = document.getElementById('item-list');
console.log(itemList);


// BY TAGS NAME
const allparag = document.getElementsByTagName('p');
console.log(allparag.length);

//loop through all paragraphs
for(let i =0 ;i<allparag.length;i++){
    allparag[i].style.fontStyle = 'italic';
}