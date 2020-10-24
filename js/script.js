let modal = document.querySelector('.search-form');
let button = document.querySelector('.modal-button');
let dates = document.querySelectorAll('.date-field');
let guests = document.querySelectorAll('.number-field');

let isStorageSupport = true;

modal.classList.toggle('modal-show')
button.addEventListener('click', function() {
    modal.classList.toggle('modal-hidden');
    modal.classList.toggle('modal-show');
});

modal.addEventListener('submit', function(evt) {
    if(!dates.item(0).value || !dates.item(1).value || !guests.item(0).value || !guests.item(1).value){
        evt.preventDefault();
        modal.classList.remove('modal-error');
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add('modal-error');
       
    } else {
        if (isStorageSupport) {
          localStorage.setItem('adults', guests.item(0).value);
          localStorage.setItem('children', guests.item(1).value);
        }
    }
});
