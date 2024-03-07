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
    
        if ((password.length > 7) && (regexEmail.test(username))) {
                alert('YEEEEAAAAAAHHHHHH')
        } else {
            alert('WROOONG')
        }
    
        //if (regexEmail.test(username)) {
        //    alert('YEEEEAAAAAAHHHHHH')
        //} else {
        //    alert('BUUUUUUUHHHHHH')
       // }
    
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

    function generateRandomNumber(min = 66, max = 500) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(`Execute Order ${generateRandomNumber(1, 5)}`);
    generateRandomNumber();
    

    let today = new Date();
    console.log(today.getFullYear());
    console.log(today.getMonth());
    console.log(today.getDay());
    console.log(today.getDate());

    let todayHours = today.getHours().toString().padStart(2,0);
    let todayMinutes = today.getMinutes().toString().padStart(2,0);
    console.log(todayHours , todayMinutes);


const princess = ['Bubblegum','Lumpy space','Hotdog','Lumpy space','Flame','Breakfast','Wildberry','Ghost','Nightmare','Raggedy','Slime'];
 const princessUnique = [];
 princess.forEach((value) => {
    const index  = princessUnique.findIndex((element) => element === value);
    if (index === -1) {
        princessUnique.push(value);
    }
 });
console.log(princessUnique);


// const uniquePrincess = [... new Set(princess)];
// const princessSet = new Set (princess);
//samlet løsning  const uniquePrincess = Array.from(princessSet);
// console.log(uniquePrincess);

console.log([... new Set(princess)]);

console.log(princess);
console.log(princess.indexOf(`Flame`));

let oneWordPrincessName = princessUnique.find(girls => girls.includes(' '));
let oneWordPrincessIndex = princessUnique.findIndex(girls => girls.includes(' '));
console.log(`the first entry with a space is ${oneWordPrincessName} and its index is ${oneWordPrincessIndex}.`);

princessUnique.splice(2, 1, `Finn`, `Jake`);
console.log(princessUnique);