/*
DEVELOPER: Hon Olabayo Segun Emmanuel
Department: Computer Science
Version: 1.0 version
Organisation: Samdos Express Technology
Security: None
*/

function onloadFunc(){

    if(location.protocol !== "/csc32020180101seo1"){
        window.location.assign('/security');

    }
      else alert("goal");

}
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
        // window.location.replace('/csc32020180101seo1');
        // $('#basicExampleModal').modal('show');
        // document.write('/google.com');

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


// =============================== csc320 =================================================
function checked(){
    let printId = [];
    let printId2 = []; let printId3=[]; let printId4=[];let printId5=[];let printId6=[];
    let printId7 = []; let printId8=[]; let printId9=[];let printId10=[];let printId11=[]; let printId12 = [];
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId.push(" " + myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId1').innerHTML = printId;
    }
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId2.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId2').innerHTML = printId2;

    }


// =============================== csc322 =================================================

    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId3.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId3').innerHTML = printId3;

    }
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId4.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId4').innerHTML = printId4;

    }

// =============================== csc326 =================================================
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId5.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId5').innerHTML = printId5;

    }
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId6.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId6').innerHTML = printId6;

    }

    // =============================== csc328 =================================================
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId7.push(" " + myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId7').innerHTML = printId7;
    }
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId8.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId8').innerHTML = printId8;

    }

    // =============================== csc340 =================================================
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId9.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId9').innerHTML = printId9;

    }
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId10.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId10').innerHTML = printId10;

    }

// =============================== mat332 =================================================
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId11.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId11').innerHTML = printId11;

    }
    for (let x1 = 1; x1 < 10; x1++){
        let myPin = Math.floor(Math.random()*10000);
        myPin = myPin + 10000;
        printId12.push(" "+ myPin);
        document.getElementById('copyPin').style.visibility = "visible";
        document.getElementById('printId12').innerHTML = printId12;

    }


    // =============================== The end =================================================


    // let copyPin = document.getElementById('copyPin');
    // copyPin.onclick = function(){
        // copyToClipboard(pinSale);
        // let copyText = document.getElementById('myInput');
        // copyText.select();
        // document.execCommand("copy");
        // alert("Copied the text: "+ pinSale);
}
