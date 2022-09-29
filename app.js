let screen = document.getElementById('screenInp');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(elem)=>{
        buttonText=elem.target.innerText;
        if(buttonText=='C'){
            screenValue = "";
            screenInp.value=screenValue;  

        }
        else if(buttonText == '='){
            screenInp.value =eval(screenValue);

        }
        else{
            screenValue+=buttonText;
            screenInp.value=screenValue
        }

    })
}



