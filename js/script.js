let myForm = document.querySelector('.search-form');
let myButton = document.querySelector('.modal-button');
let searchButton = document.querySelector('.search-form-button');
let dates = document.querySelectorAll('.date-field');
let guests = document.querySelectorAll('.number-field');


let isStorageSupport = true;

myForm.classList.toggle('modal-show')
myButton.addEventListener('click', function() {
    myForm.classList.toggle('modal-hidden');
    myForm.classList.toggle('modal-show');
});

myForm.addEventListener('submit', function(evt) {
    if(!dates.item(0).value || !dates.item(1).value || !guests.item(0).value || !guests.item(1).value){
        evt.preventDefault();
        myForm.classList.remove('modal-error');
        myForm.offsetWidth = myForm.offsetWidth;
        myForm.classList.add('modal-error');
       
    } else {
        if (isStorageSupport) {
          localStorage.setItem('adults', guests.item(0).value);
          localStorage.setItem('children', guests.item(1).value);
        }
    }
});
