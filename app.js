// fahrenheit to celcius algorithm

function convertFahrToCelsius(fahrenheit) {
    if (typeof fahrenheit === "string" || typeof fahrenheit === "number") {
        const fTemp = parseInt(fahrenheit);
        const fToCel = (fTemp - 32) * 5 / 9;
        const result = `${fTemp.toFixed(4)}\xB0F is ${fToCel.toFixed(4)}\xB0C.`;
        console.log(result);
    }
    if (Array.isArray(fahrenheit)) {
        console.log(`[${fahrenheit}] is not a valid number but a/an Array`);
    }
    if (typeof fahrenheit === 'object') {
        let value = JSON.stringify(fahrenheit);
        console.log(`[${fahrenheit}] is not a valid number but a/an object.`)
    };
}
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 3, 4, 5]);
convertFahrToCelsius({ temp: 0 })


/*Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array. */

function checkYuGiOh(n) {
    let arr = [];
    if (isNaN(n) || n === null) {
        console.log(`invalide parameter: '${n}'`);
    } else {
        for (let i = 1; i <= n; i++) {
            if (n === 1) {
                return 1;
            } else {
                if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                    arr.push("yu-gi-oh");
                } else if (i % 2 === 0 && i % 3 === 0) {
                    arr.push("yu-gi");
                } else if (i % 2 === 0 && i % 5 === 0) {
                    arr.push("gi-oh");
                } else if (i % 2 === 0) {
                    arr.push("yu");
                } else if (i % 3 === 0) {
                    arr.push("gi");
                } else if (i % 5 === 0) {
                    arr.push("oh");
                } else {
                    arr.push("" + i);
                }
            }

        }
        console.log(arr);
    }
};
checkYuGiOh(3);
checkYuGiOh("fizzbuzz is meh")
checkYuGiOh("5")