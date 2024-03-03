function GetForexData() {
    var form = $("#myform");
    form.validate();
    if (form.valid()) {
        var baseCurrency = document.getElementById("BaseCurrency").value;
        var convertToCurrency = document.getElementById("ConvertToCurrency").value;
        var fromDate = document.getElementById("FromDate").value;
        var toDate = document.getElementById("ToDate").value;
        var apiKey = "951jAjDkFUGivM5hi8EzX2uMnLEPaf2L"; // Replace with your API key
        var url = "https://api.polygon.io/v2/aggs/ticker/C:" + baseCurrency + convertToCurrency + "/range/1/day/" + fromDate + "/" + toDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey;
        
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                DrawChart(data.results);
            },
            error: function(xhr, status, error) {
                console.error("Error:", error);
                // Display error message to the user
            }
        });
    }
}

function DrawChart(data) {
    var forexData = data.map(function(entry) {
        return {
            x: new Date(entry.t),
            y: entry.c
        };
    });
    var ctx = document.getElementById('forexChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Forex Data',
                data: forexData,
                borderColor: 'blue',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Exchange Rate'
                    }
                }]
            }
        }
    });
}

function ClearForm() {
    $("#myform")[0].reset();
    ClearChart();
}

function ClearChart() {
    var ctx = document.getElementById('forexChart').getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}