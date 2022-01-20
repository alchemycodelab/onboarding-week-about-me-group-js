// import functions and console.log out the results from the file to validate you have successfully imported the data.
import { people } from './data.js';
// console.log(people, 'people');

// grab DOM elements
// to grab the DOM element we use the document.querySelector() method and pass in the element/tag we want to grab.
// You can also use the document.getElementById() method to grab an element by its id. 
//ex: const nameEl = document.getElementById('name');

const selectEl = document.querySelector('#name');
const nameEl = document.querySelector('h5');
const bioEl = document.querySelector('p');
const hobbiesEl = document.querySelector('ul');
const ageEl = document.querySelector('span');
const contain = document.querySelector('div');

//// After you have set the dom elements to a variable we need to validate that we have correctly grabbed the dom elements.
// ex: console.log(selectEl, nameEl, 'nameEl', bioEl, 'bioEl', hobbiesEl, 'hobbiesEl');
/// The loggings are commented out because they are not needed
/// You can uncomment them to see the results in your inspect tab on chrome.

// set event listeners to the select variable on line 10.
// The event listener is set to the onchange event. which means it will run when the select element changes.
selectEl.addEventListener('change', (e) => { 
        // use user input to update dom
       //// Below we grab the value of the select element and set it to a variable.
    const selected = e.target.value;
    //// Console.log the value of the selected variable to validate that we have the correct value.
    // console.log(selected, 'selected');


   ///Next we need to clear out the DOM elements. We do this by setting the innerHTML to an empty string. 
    /// If you do not do this the DOM elements will not be cleared out. And will keep adding to the DOM.
    hobbiesEl.innerHTML = '';


    /// Next we remove the class from the div element.
    /// Again if you do not remove the class the div element will keep adding to the DOM and will not add each style to each person.
    contain.classList.remove('John', 'Jane', 'Bob', 'Mary');

    /// Next we write a if statement to check the selected value and render the correct person via the renderPerson function.
    /// All this does is check if this is equal to John, Jane, Bob, or Mary and updates the dom with the data we imported above depending on the value.
    if (selected === 'one') {
        //// We then use the renderPerson function to render the first person in the people array if the user selects the first option 'one'.
        /// Look below for the renderPerson function.
        /// since renderPerson takes in an index we need to set the index to 0 in this case and since arrays start at 0 we see john render to the dom.
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
   /// This function takes in a parameter of the index of the person we want to render and then renders that person's data depending on the index.
    ///here we add a class list of the person's name to the div element to style each one dynamically.
    contain.classList.add(`${people[index].name}`);
    ///Next we return the name, age, bio, and hobbies of the person we want to render and set then to textContent of the variables we created above.

    nameEl.textContent = 'Name: ' + people[index].name;
    ageEl.textContent = 'Age: ' + people[index].age;
    bioEl.textContent = 'Bio: ' + people[index].bio;
   ////Since hobbies is a array we need to for loop to loop through the array and add each item to the DOM.
   /// Then we creat a li element and set its textContent to the item in the array.
    /// Then we append the li element to the ul element.
    for (let hobby of people[index].hobbies) { 
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li); 
    }
    ////This can also be wrote like this by using a map method.

    // people[index].hobbies.map((hobby) => {
    //     const li = document.createElement('li');
    //     li.textContent = hobby;
    //     hobbiesEl.appendChild(li);
    // });
}
