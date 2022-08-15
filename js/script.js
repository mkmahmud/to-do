const addbtn = document.querySelector('.add-section button');
const userText = document.querySelector('.userText');

userText.addEventListener('keypress', function(e){
    addbtn.removeAttribute('disabled', true);
});
   addbtn.addEventListener('click', function(){
    const list = document.querySelector('.list ul');
    const userVal = userText.value;
    const createLi = document.createElement('li');
    const innertext = createLi.innerText = userVal;
    list.appendChild(createLi); 
   })