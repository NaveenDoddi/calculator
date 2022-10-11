function sum(){
    var input = document.getElementById("inpt").value;
    let Array=[];
    var inputvalue=input.split("+");
    
    Array=inputvalue;
    let num1=parseInt(Array[0]);
    let num2=parseInt(Array[1]);
    document.getElementById("output").append(num1+num2);
    
}
function sub(){
    var input = document.getElementById("inpt").value;
    let Array=[];
    var inputvalue=input.split("-");
    
    Array=inputvalue;
    let num1=parseInt(Array[0]);
    let num2=parseInt(Array[1]);
    document.getElementById("output").append(num1-num2);
    
}
function mul(){
    var input = document.getElementById("inpt").value;
    let Array=[];
    var inputvalue=input.split("*");
    
    Array=inputvalue;
    let num1=parseInt(Array[0]);
    let num2=parseInt(Array[1]);
    document.getElementById("output").append(num1*num2);
}
function div(){
    var input = document.getElementById("inpt").value;
    let Array=[];
    var inputvalue=input.split("/");
    
    Array=inputvalue;
    let num1=parseInt(Array[0]);
    let num2=parseInt(Array[1]);
    document.getElementById("output").append(num1/num2);
}

function per(){
    var input = document.getElementById("inpt").value;
    let Array=[];
    var inputvalue=input.split("%");
    
    Array=inputvalue;
    let num1=parseInt(Array[0]);
    let num2=parseInt(Array[1]);
    document.getElementById("output").append(num1%num2);
}
function ans(){
    document.getElementById("inpt").value=" ";
}
function ac(){
    document.getElementById("inpt").value=" ";
    document.getElementById("output").innerHTML=" ";
    document.para.write(" ");
    
}

// setTimeout(() => {window.location.reload();}, 1000);