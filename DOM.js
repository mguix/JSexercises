
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