var arr = [];
function myCounter(n) {
    // Only change code below this line
    
    if (n < 1) {
        return [];
    } else {
        const arr = myCounter(n - 1);
        arr.unshift(n);
        return arr
        // Only change code above this line
    }
}
console.log(myCounter(-1)); 
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;