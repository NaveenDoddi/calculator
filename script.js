
function giveInput(element){
    var value = element.innerText;
    document.getElementById("input").append(value);
}

function ans(){
    document.getElementById("output").innerHTML=""
    document.getElementById("outputLogo").style.display = "none"

    var input = document.getElementById("input").innerHTML
    
    document.getElementById("output").append(eval(input))
    // let Array=[];
    // for(let x=0; x<input.length; x++){

    //     if(input[x]=="+"){
            
    //         var inputvalue=input.split("+");
    
    //         Array=inputvalue;
    //         let num1=parseFloat(Array[0]);
    //         let num2=parseFloat(Array[1]);
    //         document.getElementById("output").append(num1+num2);
    //     }
    //     if(input[x]=="-"){

    //         var inputvalue=input.split("-");
    
    //         Array=inputvalue;
    //         let num1=parseFloat(Array[0]);
    //         let num2=parseFloat(Array[1]);
    //         document.getElementById("output").append(num1-num2); 
    //     }
    //     if(input[x]=="*"){
    //         var inputvalue=input.split("*");
    
    //         Array=inputvalue;
    //         let num1=parseFloat(Array[0]);
    //         let num2=parseFloat(Array[1]);
    //         document.getElementById("output").append(num1*num2); 
    //     }
    //     if(input[x]=="/"){
    //         var inputvalue=input.split("/");
    
    //         Array=inputvalue;
    //         let num1=parseFloat(Array[0]);
    //         let num2=parseFloat(Array[1]);
    //         document.getElementById("output").append(num1/num2); 
    //     }
    //     if(input[x]=="%"){
    //         var inputvalue=input.split("%");
    
    //         Array=inputvalue;
    //         let num1=parseFloat(Array[0]);
    //         let num2=parseFloat(Array[1]);
    //         document.getElementById("output").append(num1%num2)
    //     }

    // }

}
function ac(){
    window.location.reload()
}
function del(){

    var input = document.getElementById("input").innerHTML
    var slicedData=input.slice(0, -1)
    document.getElementById("input").innerHTML=" "
    document.getElementById("input").append(slicedData)

}


function run(){
    document.getElementById("inputLogo").style.display = "none"
    document.getElementById("output").style.transform
}

function factorial(){
    document.getElementById("input").append("!")
    document.getElementById("outputLogo").style.display = "none"

    var value = document.getElementById("input").innerText.split("!")[0]
    var result = 1
    for(let i = value; i > 1; i--){
        result *= i
    }
    document.getElementById("output").append(result)

}

function factors(){
    document.getElementById("outputLogo").style.display = "none"
    var value = document.getElementById("input").innerText
    var result = ''
    for(let i = 1; i < value; i++){
        if(value % i == 0){
            result += i + ", "

        }

    }
    result += value
    document.getElementById("output").append(result)

}

function suareRoot(){
    document.getElementById("outputLogo").style.display = "none"
    var value = document.getElementById("input").innerText
    var result = Math.sqrt(value)
    document.getElementById("output").append(result)

}

// setTimeout(() => {window.location.reload();}, 1000);
