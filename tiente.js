function ChangeMoney(){
    let amount= document.getElementById('Money').value;
    let FC= document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let result;
    if (FC == 'USD' && To == 'VND'){
        result = 'Result:' + (amount*23000) + 'Đ';
    }else if(FC == 'VND' && To == 'USD'){
        result = 'Result:' + (amount/23000) + '$';
    }else if(FC == 'VND'){
        result = 'Result:' + amount + 'Đ';
    }else{
        result = 'Result:' + amount + '$';
    }
    document.getElementById('Result').innerHTML= result;

}