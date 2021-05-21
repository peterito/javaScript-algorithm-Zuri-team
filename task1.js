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
