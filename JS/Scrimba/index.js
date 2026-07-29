// function add(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }

// function display(result) {
//     console.log("Result is:", result);
// }

add(10, 20, display);
function calculate(a, b, callback) {
    callback(a + b);
}

calculate(5, 6, function (result) {
    console.log(result);
});