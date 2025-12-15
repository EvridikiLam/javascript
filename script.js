
        let num1 = Number(prompt("Give me the first number"));
        let num2 = Number(prompt("Give me the second number"));
        let op = prompt("Give me the operator");
        let result;

    if (op === '+'){
        result = num1 + num2;
    }
    else if (op === '-') {
        result = num1 - num2;
    }
    else if (op === '*') {
        result = num1*num2;
    }
    else if (op=== '/' && num2!=0) {
        result = num1/num2;
    }   
    else {
        document.getElementById('error').innerHTML = "Not Supported";
    }

    if (result !== undefined) {
      document.getElementById("demo").innerHTML = result;
    }

    