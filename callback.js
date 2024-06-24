// Napisete edna callback funkcija.

new Promise(function (resolve, reject) {
    let num = Math.floor(Math.random() * 10 + 1);
    if (Math.random() < 0.5) {
        reject("Rejected");
    }
    resolve(num);
}).then(function (answer) {
    console.log(`Number: ${answer}`); // num
}).catch(function (err) {
    console.error(err); // rejected
}).finally(function () {
    console.log("Ke se ispechati ova nebitno od resultatot");
});