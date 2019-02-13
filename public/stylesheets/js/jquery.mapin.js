/*
DEVELOPER: Hon Olabayo Segun Emmanuel
Department: Computer Science
Version: 1.0 version
Organisation: Samdos Express Technology
Security: None
*/


// -----------------------------------CSC320 start here -----------------------------------------------

function getPinCss320161734(){

let array1 = [12324, 10944 ,19100 ,13171 ,10002 ,12498 ,19815 ,17758 ,11991];
let userPin = document.getElementById('userPin').value;
   let found = array1.find(function index(item){
       if(item == userPin){
            document.getElementById('danger').style.visibility = "visible";
            document.getElementById('print-error').innerHTML = "Congratulation!!!";
        return item;
       } else if(item !=userPin){
            if(userPin == ""){
                document.getElementById('danger').style.visibility = "visible";
                document.getElementById('print-error').innerHTML = "You didn't enter any Value, Please Input Pin!!!";
            }else{

            document.getElementById('danger').style.visibility = "visible";
            document.getElementById('print-error').innerHTML = "You've entered an Incorrect pin, kindly try again!!!";
            }
       }
   });

   if (found){
        window.location.replace('/csc32020180101seo1');
   }  
}

function getPinCss320161756(){
    let array1 = [16986 ,18890 ,11742 ,14599 ,11423 ,14570 ,18441 ,17483 ,12561];
let userPin = document.getElementById('userPin').value;
   let found = array1.find(function index(item){
       if(item == userPin){
            document.getElementById('danger').style.visibility = "visible";
            document.getElementById('print-error').innerHTML = "Congratulation!!!";
        return item;
       } else if(item !=userPin){
            if(userPin == ""){
                document.getElementById('danger').style.visibility = "visible";
                document.getElementById('print-error').innerHTML = "You didn't enter any Value, Please Input Pin!!!";
            }else{

            document.getElementById('danger').style.visibility = "visible";
            document.getElementById('print-error').innerHTML = "You've entered an Incorrect pin, kindly try again!!!";
            }
       }
   });

   if (found){
        window.location.replace('/csc32020180101seo2');
   } 
}

// -------------------------------------end here ----------------------------------------------------------

// ------------------------------------CSC322 start here -------------------------------------------------



function getPinCss332161723(){
    let array1 = [12324, 10944 ,19100 ,13171 ,10002 ,12498 ,19815 ,17758 ,11991];
    let userPin = document.getElementById('userPin').value;
       let found = array1.find(function index(item){
           if(item == userPin){
                document.getElementById('danger').style.visibility = "visible";
                document.getElementById('print-error').innerHTML = "Congratulation!!!";
            return item;
           } else if(item !=userPin){
                if(userPin == ""){
                    document.getElementById('danger').style.visibility = "visible";
                    document.getElementById('print-error').innerHTML = "You didn't enter any Value, Please Input Pin!!!";
                }else{
    
                document.getElementById('danger').style.visibility = "visible";
                document.getElementById('print-error').innerHTML = "You've entered an Incorrect pin, kindly try again!!!";
                }
           }
       });
    
       if (found){
            window.location.replace('/csc3322018010102seo1');
       } 
}

function getPinCss3321617456(){
    let array1 = [12324, 10944 ,19100 ,13171 ,10002 ,12498 ,19815 ,17758 ,11991];
    let userPin = document.getElementById('userPin').value;
       let found = array1.find(function index(item){
           if(item == userPin){
                document.getElementById('danger').style.visibility = "visible";
                document.getElementById('print-error').innerHTML = "Congratulation!!!";
            return item;
           } else if(item !=userPin){
                if(userPin == ""){
                    document.getElementById('danger').style.visibility = "visible";
                    document.getElementById('print-error').innerHTML = "You didn't enter any Value, Please Input Pin!!!";
                }else{
    
                document.getElementById('danger').style.visibility = "visible";
                document.getElementById('print-error').innerHTML = "You've entered an Incorrect pin, kindly try again!!!";
                }
           }
       });
    
       if (found){
            window.location.replace('/csc3322018010103seo1');
       } 
}


// --------------------------CSC322 end here ------------------------------------

// -------------------------Checked pin code-------------------------------------
function checked(){
    let pinSale = [];
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        pinSale.push(myPin + " ");
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId').innerHTML = pinSale;

    } let copyPin = document.getElementById('copyPin');
    copyPin.onclick = function(){
        copyToClipboard(pinSale);
        // let copyText = document.getElementById('myInput');
        // copyText.select();
        // document.execCommand("copy");
        // alert("Copied the text: "+ pinSale);
            
    } 
}
