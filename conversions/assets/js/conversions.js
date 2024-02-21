function convert() {
    "use strict";

    var form = $( "#unit-converter" );
    
    
    if (form.valid()) {
        
        var fromValue = document.getElementById("FromValue").value;

        var fromUnit = document.getElementById("FromUnit").value;

        var toUnit = document.getElementById("ToUnit").value;

        convertUnits(fromValue, fromUnit, toUnit);
    }
}

async function convertUnits(fromValue, fromUnit, toUnit) {
        
        
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        
        myURL = myURL + "?FromValue=" + encodeURIComponent(fromValue) + "&FromUnit=" + encodeURIComponent(fromUnit) + "&ToUnit=" + encodeURIComponent(toUnit);

       
        let response = await fetch(myURL);
        let result = await response.text();
        
        
        document.getElementById("Result").innerHTML = result;
}

function clearForm() {
    "use strict";
    
   
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