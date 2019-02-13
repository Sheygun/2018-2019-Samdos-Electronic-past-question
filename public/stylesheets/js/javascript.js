// -------------------------------------------------CSC330 start here ----------------------------------------------------------------

function getPinCss320161734(){

let array1 = [12324, 10944 ,19100 ,13171 ,10002 ,12498 ,19815 ,17758 ,11991];
let userPin = document.getElementById('userPin').value;
for(let v1 = 0; v1 < array1.length; v1++){
    
    if(userPin == array1[v1]){
        // window.location.replace('/csc32020180101seo1');
        alert(v1);
        break;   
    }
    else if (userPin == ""){
        document.getElementById('danger').style.visibility = "visible";
        document.getElementById('print-error').innerHTML = "You didn't enter any Value, Please Input Pin!!!" + v1;
    }
    else  if (userPin != array1){
        document.getElementById('danger').style.visibility = "visible";
        document.getElementById('print-error').innerHTML = "You've entered an Incorrect pin, kindly try again!!!"+ v1;
      continue;  
        
    }
}
    
}

function getPinCss320161756(){
    let pass1 = 1234;
    let userPin = document.getElementById('userPin').value;
    if (userPin == ""){
        document.getElementById('danger').style.visibility = "visible";
        document.getElementById('print-error').innerHTML = "You didn't enter any Value, Please Input Pin!!!";
    }else if (userPin != pass1){
        document.getElementById('danger').style.visibility = "visible";
        document.getElementById('print-error').innerHTML = "You've entered an Incorrect pin, kindly try again!!!";
    }
    else{
        window.location.replace('/csc32020180101seo2');
    }
}

// ---------------------------------------------------------------------end here --------------------------------------------------------------------------------------

// --------------------------------------------------------------------CSC320 start here ----------------------------------------------------------------



function getPinCss332161723(){
    let pass1 = 5678;
    let userPin = document.getElementById('userPin').value;
    if (userPin == ""){
        document.getElementById('danger').style.visibility = "visible";
        document.getElementById('print-error').innerHTML = "You didn't enter any Value, Please Input Pin!!!";
    }else if (userPin != pass1){
        document.getElementById('danger').style.visibility = "visible";
        document.getElementById('print-error').innerHTML = "You've entered an Incorrect pin, kindly try again!!!";
    }
    else{
        window.location.replace('/csc3322018010102seo1');
    }
}

function getPinCss3321617456(){
    let pass1 = 5678;
    let userPin = document.getElementById('userPin').value;
    if (userPin == ""){
        document.getElementById('danger').style.visibility = "visible";
        document.getElementById('print-error').innerHTML = "You didn't enter any Value, Please Input Pin!!!";
    }else if (userPin != pass1){
        document.getElementById('danger').style.visibility = "visible";
        document.getElementById('print-error').innerHTML = "You've entered an Incorrect pin, kindly try again!!!";
    }
    else{
        window.location.replace('/csc3322018010103seo1');
    }
}


// --------------------------------------------------------------------CSC320 end here ----------------------------------------------------------------

// --------------------------------------------------------------------Checked pin code----------------------------------------------------------------
function checked(){
    let pinSale = [];
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        pinSale.push(myPin + " ");

        // if(){
                   
        // }
        document.getElementById('printId').innerHTML = pinSale;
    } 
    

}