const choiseRadio = document.querySelectorAll('.fake-radio');

choiseRadio.forEach((i) => {
    i.onclick = function(){
        choiseRadio.forEach((i) => {
            i.classList.remove('fake-choise-active');
        });
            
        i.classList.add('fake-choise-active');
    }
})