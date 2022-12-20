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


formulario.addEventListener('click', function() {
    var campos = modal.getElementsByTagName('input');

        for (var i = 0; i< campos.length; i++){
            var valor = campos[i].value;

            if( valor ===""){  
                return;
            }

        }

        alert('Se ha rellenado su formulario');
        form.submit();

});




