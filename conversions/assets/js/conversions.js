function convert() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#unit-converter" );
    
    // If all of the form elements are valid, then get the form values
    if (form.valid()) {
        
        // From Value
        var fromValue = document.getElementById("FromValue").value;

        // From Unit
        var fromUnit = document.getElementById("FromUnit").value;

        // To Unit
        var toUnit = document.getElementById("ToUnit").value;

        // Call the function to convert units
        convertUnits(fromValue, fromUnit, toUnit);
    }
}

async function convertUnits(fromValue, fromUnit, toUnit) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        // Add the parameters to the URL
        myURL = myURL + "?FromValue=" + encodeURIComponent(fromValue) + "&FromUnit=" + encodeURIComponent(fromUnit) + "&ToUnit=" + encodeURIComponent(toUnit);

        // Fetch the results
        let response = await fetch(myURL);
        let result = await response.text();
        
        // Display the result
        document.getElementById("Result").innerHTML = result;
}

function clearForm() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("FromUnit").value = "";
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("ToUnit").value = "";
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#unit-converter" ).validate({

});