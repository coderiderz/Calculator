let buttons=document.querySelectorAll(".button");
let string="";

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=> {
        if(e.target.innerHTML == "="){
            string=eval(string);
            document.getElementById("result").value=string;
        }
        else if(e.target.innerHTML== "C"){
            string="";
            document.getElementById("result").value=string;
        }
        else{
            string=string + e.target.innerHTML;
            document.getElementById("result").value=string;
        }
    });
});

