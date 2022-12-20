const openModal = document.querySelector('.clientebtn');

const modal = document.querySelector('.contact_form');

const closeModal = document.querySelector('.volverbtn');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('contact_form--show')
});


closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('contact_form--show');
});

const formulario = document.querySelector('.añadirbtn');

formulario.addEventListener('click', () => {
    modal.classList.remove('contact_form--show');
    alert('Se ha rellenado su formulario');
});



