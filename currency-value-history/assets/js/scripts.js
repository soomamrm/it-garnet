async function GetCurrencyData() {
    const form = $("#myform");
    form.validate();

    if (form.valid()) {
        const fromCurrency = document.getElementById("FromCurrency").value;
        const toCurrency = document.getElementById("ToCurrency").value;
        const apiKey = "951jAjDkFUGivM5hi8EzX2uMnLEPaf2L";
        const fromDate = document.getElementById("FromDate").value;
        const toDate = document.getElementById("ToDate").value;

        const url = `https://api.polygon.io/v2/aggs/ticker/C:${fromCurrency}${toCurrency}/range/1/day/${fromDate}/${toDate}?adjusted=true&sort=asc&limit=120&apiKey=${apiKey}`;
        
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                // Process data and display using Chart.js
            } else {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }
        } catch (error) {
            console.error("Error:", error);
            // Display error message to the user
        }
    }
}

function ClearForm() {
    document.getElementById("FromCurrency").value = "USD";
    document.getElementById("ToCurrency").value = "USD";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    clearChart();
}

function clearChart() {
    const canvas = document.getElementById("chartjs-0");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}