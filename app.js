// import functions
import { people } from './data.js';
// console.log(people);

// grab DOM elements


const selectEl = document.querySelector('#name');
// console.log(template, container, selectEl);

const nameEl = document.querySelector('h5');
const bioEl = document.querySelector('p');
const hobbiesEl = document.querySelector('ul');
const ageEl = document.querySelector('span');
const contain = document.querySelector('div');
console.log(contain);
// set event listeners 

selectEl.addEventListener('change', (e) => { 
        // use user input to update state
    hobbiesEl.innerHTML = '';
    contain.classList.remove('John', 'Jane', 'Bob', 'Mary');
    const selected = e.target.value;

    if (selected === 'one') {
     
        renderPerson(0);
    } if (selected === 'two') { 
 
        renderPerson(1);
    } if (selected === 'three') { 

        renderPerson(2);
    } if (selected === 'four') { 

        renderPerson(3);
    }
    
});

function renderPerson(index) {
     // update DOM to reflect the new state
    // clearAll();
    contain.classList.add(`${people[index].name}`);

    return nameEl.textContent = 'Name: ' + people[index].name,
    ageEl.textContent = 'Age: ' + people[index].age,
    bioEl.textContent = 'Bio: ' + people[index].bio,
   
    people[index].hobbies.map((hobby) => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    });
}
