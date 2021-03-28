const INPUTS = document.getElementsByClassName('form-text');


for(let i =0; i<INPUTS.length; i++){
    INPUTS[i].addEventListener('keyup', function(){
        if(this.value.length >= 1) {
            this.nextElementSibling.classList.add('stop-animation');
        } else {
            this.nextElementSibling.classList.remove('stop-animation');
        }        
    });
}
