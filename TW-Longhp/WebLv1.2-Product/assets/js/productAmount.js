function focusInput(x){
    x.style.background="#f1f1f1";
}

function blurInput(x){
    x.style.background="white";
}

function decValue(){
    var x=document.getElementsByClassName("amount-value")[0];
    var value=parseInt(x.value)-1;
    if(value<1){
        x.value=1;
    }
    else{
        x.value=value;
    }
}

function incValue(){
    var x=document.getElementsByClassName("amount-value")[0];
    var value=parseInt(x.value)+1;
    x.value=value;
}