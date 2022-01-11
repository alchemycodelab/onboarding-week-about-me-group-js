// import functions
import { people } from './data.js';
// console.log(people);

// grab DOM elements


const selectEl = document.querySelector('#name');
// console.log(template, container, selectEl);

const nameEl = document.querySelector('h1');
const bioEl = document.querySelector('p');
const hobbiesEl = document.querySelector('ul');
const ageEl = document.querySelector('span');


// set event listeners 

selectEl.addEventListener('change', (e) => { 
        // use user input to update state
    hobbiesEl.innerHTML = '';

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
    return nameEl.textContent = people[index].name,
    bioEl.textContent = people[index].bio,
    ageEl.textContent = people[index].age,
    people[index].hobbies.map((hobby) => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    });
}
