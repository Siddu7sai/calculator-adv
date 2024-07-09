let display=document.getElementById('input');
let result;
function add(x){
   result=display.value+=x;
   console.log(x);
}
function clr(){
    display.value=' '
}
function sum(){
    console.log(result);
    display.value=eval(result);
}
function remove(){
    display.value=result.toString().slice(0,-1);
}