function calculate() {
    var operand1 = parseFloat(document.getElementById("Operand1").value);
    var operand2 = parseFloat(document.getElementById("Operand2").value);
    var operator = getSelectedOperator();

    if (isNaN(operand1) || isNaN(operand2) || !operator) {
        document.getElementById("Result").innerText = "Invalid input. Please check your entries.";
        return;
    }

    var result = performOperation(operator, operand1, operand2);
    document.getElementById("Result").innerText = formatResult(result);
}

function getSelectedOperator() {
    var operators = document.getElementsByName("Operator");
    for (var i = 0; i < operators.length; i++) {
        if (operators[i].checked) {
            return operators[i].value;
        }
    }
    return null;
}

function performOperation(operator, operand1, operand2) {
    if (operator === "Add") {
        return operand1 + operand2;
    } else if (operator === "Subtract") {
        return operand1 - operand2;
    } else if (operator === "Multiply") {
        return operand1 * operand2;
    } else if (operator === "Divide") {
        return operand1 / operand2;
    } else {
        return NaN;
    }
}

function formatResult(result) {
    if (Number.isInteger(result)) {
        return result;  // Display whole numbers without decimals
    } else {
        return result.toFixed(2);  // Display numbers with decimals
    }
}

function clearform() {
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Error").innerText = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand2Error").innerText = "";
    document.getElementById("AddOperator").checked = true;
    document.getElementById("Result").innerText = "";
}