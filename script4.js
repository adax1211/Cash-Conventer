document.getElementById("convertButton").addEventListener("click", function() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);
    const currencyFrom = document.getElementById("currencyFrom").value;
    const currencyTo = document.getElementById("currencyTo").value;

    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0.");
        amountInput.focus(); 
        return; 
    }

    
    if (currencyFrom === currencyTo) {
        alert("Please select different currencies.");
        return;
    }

    let conversionRate = 1; 
    if (currencyFrom === "USD" && currencyTo === "EUR") {
        conversionRate = 0.85; 
    } else if (currencyFrom === "USD" && currencyTo === "GBP") {
        conversionRate = 0.75;
    } else if (currencyFrom === "EUR" && currencyTo === "USD") {
        conversionRate = 1.18;
    } else if (currencyFrom === "EUR" && currencyTo === "GBP") {
        conversionRate = 0.88;
    } else if (currencyFrom === "GBP" && currencyTo === "USD") {
        conversionRate = 1.33;
    } else if (currencyFrom === "GBP" && currencyTo === "EUR") {
        conversionRate = 1.14;
    }

    const result = amount * conversionRate;
    document.getElementById("resultText").innerText = `${amount} ${currencyFrom} is approximately ${result.toFixed(2)} ${currencyTo}.`;
});
