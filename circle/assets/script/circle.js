
$("#CircleForm").validate();
        function displayCircle() {
            if ($("#CircleForm").valid()) {
                var radius = parseFloat(document.getElementById("radius").value);
                
                var diameter = 2 * radius;
                var circumference = 2 * Math.PI * radius;
                var area = Math.PI * radius * radius;

                document.getElementById("diameter").innerText = diameter.toFixed(2);
                document.getElementById("circumference").innerText = circumference.toFixed(2);
                document.getElementById("area").innerText = area.toFixed(2);
            }
        }

        function clearForm() {
            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerText = "";
            document.getElementById("diameter").innerText = "";
            document.getElementById("circumference").innerText = "";
            document.getElementById("area").innerText = "";
        }