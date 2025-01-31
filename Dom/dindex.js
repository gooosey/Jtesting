// // Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// // Multiple element
// console.log(document.querySelectorAll('.item'));

// // Grab each item
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// // Do something with ul
// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'change'; 
// ul.children[1].innerText = 'brad';
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>';
// ul.lastElementChild.remove()
// ul.remove()

// // Button change
// const btn = document.querySelector('.btn');
// btn.style.background ='red';

// // Events
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'
//     // document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

// Add more users

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li);

        // Clear fields

        nameInput.value = '';
        emailInput.value = '';
    }
}