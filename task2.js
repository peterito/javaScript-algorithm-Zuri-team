/*Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array. */

function checkYuGiOh(n) {
    let arr = [];
    if (isNaN(n) || n === null) {
        console.log(`invalid parameter: '${n}'`);
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
checkYuGiOh("fizzbuzz is meh");
checkYuGiOh("5");