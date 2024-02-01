function calculate() {
    var operand1 = parseFloat(document.getElementById("Operand1").value);
    var operand2 = parseFloat(document.getElementById("Operand2").value);
    var operator = document.getElementById("Operator").value;

    if (isNaN(operand1) || isNaN(operand2) || !operator) {
        document.getElementById("Result").innerText = "Invalid input. Please check your entries.";
        return;
    }

    var result = performOperation(operator, operand1, operand2);
    document.getElementById("Result").innerText = "Result: " + result.toFixed(2);
}

function performOperation(operator, operand1, operand2) {
    switch (operator) {
        case "Add":
            return operand1 + operand2;
        case "Subtract":
            return operand1 - operand2;
        case "Multiply":
            return operand1 * operand2;
        case "Divide":
            return operand1 / operand2;
        default:
            return NaN;
    }
}

function clearform() {
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Error").innerText = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand2Error").innerText = "";
    document.getElementById("Operator").value = "Add";
    document.getElementById("OperatorError").innerText = "";
    document.getElementById("Result").innerText = "";
}