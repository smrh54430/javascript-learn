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

// Brug map() til at skabe et nyt array med et objekt for hver prinsesse, der indeholder navnet og dens index.
const princessWithIndex = princess.map((value, index) => ({ name: value, index }));

// Brug filter() til at filtrere objekterne, der har navne, der indeholder mellemrum.
const princessWithSpace = princessWithIndex.filter(princessObj => princessObj.name.includes(' '));

// Udskriv de fundne prinsesser med deres indeks via konsollen.
princessWithSpace.forEach(princessObj => {
    console.log(`Princess: ${princessObj.name}, Index: ${princessObj.index}`);
});

princessUnique.splice(2, 1, `Finn`, `Jake`);
console.log(princessUnique);

princessUnique.sort();
console.log(princessUnique);

const princessAge = [
    {name: 'Bubblegum', age: 24},
    {name: 'Lumpy space', age: 67},
    {name: 'Hotdog', age: 35},
    {name: 'Lumpy space', age: 67},
    {name: 'Flame', age: 50},
    {name: 'Breakfast', age: 52},
    {name: 'Wildberry', age: 46},
    {name: 'Ghost', age: 34},
    {name: 'Nightmare', age: 666},
    {name: 'Raggedy', age: 33},
    {name: 'Slime', age: 111}];

  //  princessAge.sort(function(a, b){
  //      if (a.age < b.age){
  //          return -1;
  //      } else if (a.age > b.age){
  //          return 1;
  //      } else {
  //          return 0;
  //      }
  //  });
 // princessAge.sort((a, b) => a.age - b.age);

  //  console.log(princessAge);

  // localecompare sorterer på samme måde som - den fungerer bare også med bogstaver
  princessAge.sort((a, b) => a.name.localeCompare(b.name));

  console.log(princessAge);
