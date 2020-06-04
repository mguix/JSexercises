
// Eliminating the existent content and creating an UL

const oldContent = document.getElementById('helloWorld');
console.log(oldContent);

oldContent.remove();

const appDiv = document.createElement('div');
appDiv.classList.add('app');

const myUl = document.createElement('ul');
appDiv.insertAdjacentElement('afterbegin', myUl);

for ( let i = 1; i < 4; i++) { 
    let myLi = document.createElement('li');
    myLi.textContent = `${i}`;
    myUl.insertAdjacentElement('beforeend', myLi);

}

document.body.appendChild(appDiv);

// Eliminating the existing content and following course exercise
// Creating an image, some paragraphs and a title

appDiv.remove();

const wrappingDiv = document.createElement('div');
wrappingDiv.classList.add('wrapper');

document.body.append(wrappingDiv);

const coverPic = document.createElement('img');
coverPic.src = 'alexrainbirdmusic.png'; 
coverPic.alt = 'cover june 2020';
coverPic.classList.add('coverpic');
coverPic.width = 250;

wrappingDiv.insertAdjacentElement('afterbegin', coverPic);

const heading = document.createElement('h2');
heading.textContent = 'alexrainbirdMusic June 2020';
heading.classList = 'mainH2';

wrappingDiv.insertAdjacentElement('afterbegin', heading);

const paragraphs = document.createElement('div');
paragraphs.innerHTML = `
<div class='text'>
<p> This is the new released cover of Alex Rain Bird Music for June 2020 </p>
<p> A compilation of Folk, Indie and Pop music </p>
</div>
`;

coverPic.insertAdjacentElement('afterend', paragraphs);
const textDiv = paragraphs.querySelector('.text');
textDiv.children[1].classList.add('warning');

// Creating 4 cards with the said content

function generatPlayerCard(name, age, height){
    return `
    <div class="playerCard">
    <h2>${name}</h2>
    <p>She is ${height}cm tall and ${age} years old. In Human years this dog would be ${age*6}.</p>
    </div>
    `;
}

const containerDiv = document.createElement('div');
containerDiv.classList.add('cards');

const mileyCard = document.createElement('div');
mileyCard.innerHTML = generatPlayerCard('Miley', 11, 50);
containerDiv.insertAdjacentElement('afterbegin', mileyCard);

const amyCard = document.createElement('div');
amyCard.innerHTML = generatPlayerCard('Amy', 10, 28);
containerDiv.insertAdjacentElement('afterbegin', amyCard);

const melCard = document.createElement('div');
melCard.innerHTML = generatPlayerCard('Mel', 1, 40);
containerDiv.insertAdjacentElement('afterbegin', melCard);

const skyCard = document.createElement('div');
skyCard.innerHTML = generatPlayerCard('Sky', 3, 45);
containerDiv.insertAdjacentElement('afterbegin', skyCard);

wrappingDiv.insertAdjacentElement('beforeend', containerDiv);

// Adding deleting buttons to each card

// MileyCard

const mileyCardButton = document.createElement('button');
mileyCardButton.textContent = 'delete';
mileyCardButton.addEventListener('click', function() {
    mileyCard.remove();
});

const mileyCardText = mileyCard.querySelector('p');
mileyCardText.insertAdjacentElement('afterend', mileyCardButton);

// AmyCard

const amyCardButton = document.createElement('button');
amyCardButton.textContent = 'delete';
amyCardButton.addEventListener('click', function() {
    amyCard.remove();
});

const amyCardText = amyCard.querySelector('p');
amyCardText.insertAdjacentElement('afterend', amyCardButton);

// MelCard

const melCardButton = document.createElement('button');
melCardButton.textContent = 'delete';
melCardButton.addEventListener('click', function() {
    melCard.remove();
});

const melCardText = melCard.querySelector('p');
melCardText.insertAdjacentElement('afterend', melCardButton);

// SkyCard

const skyCardButton = document.createElement('button');
skyCardButton.textContent = 'delete';
skyCardButton.addEventListener('click', function() {
    skyCard.remove();
});

const skyCardText = skyCard.querySelector('p');
skyCardText.insertAdjacentElement('afterend', skyCardButton);