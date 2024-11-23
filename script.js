document.getElementById("convertButton").addEventListener("click", () => {
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

    
    const getConversionRate = (from, to) => {
        const conversionRates = {
            "USD_EUR": 0.85,
            "USD_GBP": 0.75,
            "EUR_USD": 1.18,
            "EUR_GBP": 0.88,
            "GBP_USD": 1.33,
            "GBP_EUR": 1.14,
        };
        return conversionRates[`${from}_${to}`] || 1; 
    };

    
    const conversionRate = getConversionRate(currencyFrom, currencyTo);

    const result = amount * conversionRate;
    document.getElementById("resultText").innerText = `${amount} ${currencyFrom} is approximately ${result.toFixed(2)} ${currencyTo}.`;
});
