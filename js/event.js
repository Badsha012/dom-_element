console.log('extension file');

// option-02
    function makeYello(params) {
        document.body.style.backgroundColor='yellow';
        
    }
 function makeRed(params) {
    document.body.style.backgroundColor='red';
    
 }
//  option -03
const btnMake=document.getElementById('btn-blue');
   // console.log(btnMake);
   btnMake.onclick=function makeBlue(){
    document.body.style.backgroundColor='blue';
   }

//    option 3 different version
const btnMakePurpole=document.getElementById('btn-purple');
// console.log(btnMakePurpole);
btnMakePurpole.onclick=makePurpole();

function makePurpole(params) {
    document.body.style.backgroundColor='purple';
    
}
  


