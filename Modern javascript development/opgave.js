// console.log('Name: ' + name + ' - Datatype: ' + typeof(name)); //John Doe
// console.log('Age: ' + age + ' - Datatype: ' + typeof(age)); //30
// console.log('Married: ' + isMarried + ' - Datatype: ' + typeof(isMarried)); //false
// console.log('Salary: ' + salary + ' - Datatype: ' + typeof(salary)); //12345678901234567890n
// console.log('ID: ');
// console.log(id); //symbol(unique_identifier)
// console.log('ID Datatype: ' + typeof(id)); //symbol(unique_identifier)
// console.log('Object: ');


// opgave 1.2
function checkUserInput() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    const regexEmail = /\S+@\S+\.\S+/;
    
        if (password.length < 8) {
            alert('WROOOOONG');
        } else{
            alert('welcome')
        }
    
        if (regexEmail.test(username)) {
            alert('YEEEEAAAAAAHHHHHH')
        } else {
            alert('BUUUUUUUHHHHHH')
        }
    
        // if (username.trim().length > 0 && password.trim().length > 0) {
        //    alert('Velkommen ' + username); }
        // else {
        //    alert('Indtast venligst et gyldigt brugernavn og kodeord.');
        // }
    
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    
    // opgave 1.3
    function convertCurrency() {
        let usd = 55.00;
        let danskePenge = new Intl.NumberFormat('da-DK', {style: 'currency', currency: 'DKK'});
        console.log(danskePenge.format(usd*7));
    }
    convertCurrency();
    