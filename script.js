let output = document.getElementById("calc");
let hestor = document.getElementById("hes");
let btn_hes = document.getElementById("btn_hes");
let testCalc = false;
let historique = "";




function display(num){
    if (testCalc) {
        if(num === '()') {
            output.value = '(';
        } else {
            output.value = num;
            historique = num;
        }
        testCalc = false;
    } else {
        if(num === '()') {
            if(output.value.includes('(')) {
                output.value += ')';
            } else {
                output.value += '(';
            }
        } else {
            output.value += num;
            historique += num;
        }

    }

   
}
function supp(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
    historique = historique.slice(0, -1);
}



function calc(){
    try{
        output.value = eval(output.value);
        testCalc = true;
    }
    catch(err){
        output.value = "Error"
    }  
    hestor.innerHTML += `
    <div>${historique} = ${output.value} </div>
    `
    historique = "";
}





window.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        calc();
    } else if (event.key === "Backspace") {
        del();
    } else {
        let pattern = "0123456789+-*/.()";
        if(pattern.includes(event.key)) {
            display(event.key);
        }
    }
})

function hes(){
    hestor.style.display = hestor.style.display === "none" ? "block" : "none";
   
}

