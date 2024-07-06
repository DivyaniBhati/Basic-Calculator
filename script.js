

let button = document.querySelectorAll(".box");
let display = document.getElementById('display_input')
let clear = document.getElementById("btn4");

console.log(display)
let str="";
button.forEach((box)=>{
    box.addEventListener("click",()=>{
       
       if (box.value== "="){
        try{
            str = eval(str);
            display.value=str;
            str="";
        } catch(e) {
            display.value="Error";
            str="";
        }
       } else {
    str= str + box.value;
        display.value = str;
       }
    });
});

clear.addEventListener("click",()=>{
display.value=null;
});