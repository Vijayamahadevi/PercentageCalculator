function calculate() {
    var operation = document.getElementById('operation').value;
    var num1 = parseFloat(document.querySelector('input[name="num1"]').value);
    var num2 = parseFloat(document.querySelector('input[name="num2"]').value);
    var resultElement = document.querySelector('.result');
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Please enter valid numbers.";
        return;
    }  
    var result;
    if (operation === "Percentage") {
        result = (num1*num2)/100;
        resultElement.innerText="Result:" +result.toFixed(2)+"%";
    }else if(operation==="what is ____ % of ____"){
        result=(100*num1)/num2;
        resultElement.innerText="Result: "+result.toFixed(2)+"%";
    }
     else if (operation === "____ is what % of ____") {
        result = (num1 / num2) * 100;
        resultElement.innerText = "Result: " + result.toFixed(2) + "%";
    }else if(operation="____ is _____ % of what"){
        result = (num1 * 100) / num2;
        resultElement.innerText = "Result: " + result.toFixed(2) + "%";
    }
     else {
        resultElement.innerText = "Invalid operation selected.";
    }

    
}
