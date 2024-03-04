function checkUserInput(username, password) {
    return username && password ? "Velkommen, " + username + "." : "Indtast venligst et gyldigt brugernavn og kodeord.";
}

console.log(checkUserInput('Julemand', 'password123'));
console.log(checkUserInput('', 'password123')); 
console.log(checkUserInput('Julemand', '')); 

function convertCurrency(pengIUS) {
    const exchangeRate = 7.5; 

    
    const amountInDKK = (pengIUS * exchangeRate).toLocaleString('da-DK', {
        style: 'currency',
        currency: 'DKK'
    });

    return amountInDKK;
}

// Test af funktionen
console.log(convertCurrency(100)); // kr. 750,00
console.log(convertCurrency(250)); // kr. 1.875,00

