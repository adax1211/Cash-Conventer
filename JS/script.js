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

    
    const ratesToBase = {
        "PLN": 1,
        "USD": 4.0,
        "EUR": 4.5,
        "GBP": 5.2
    };

    
    if (!ratesToBase[currencyFrom] || !ratesToBase[currencyTo]) {
        alert("Selected currencies are not supported.");
        return;
    }

    
    const rateFrom = ratesToBase[currencyFrom]; 
    const rateTo = ratesToBase[currencyTo];    

    const result = (amount * rateTo) / rateFrom;

    document.getElementById("resultText").innerText = 
        `${amount} ${currencyFrom} is approximately ${result.toFixed(2)} ${currencyTo}.`;
});
