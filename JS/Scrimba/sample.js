// let a = "Hello, World!";
// if (a.includes("World")) {
//     console.log("The string contains 'World'.");
// }

// for(let i = 0; i < 5; i++) {
//     console.log("Iteration number: " + i);
// }

// let i=0;
// while( i < 5) {
//     console.log("While loop iteration: " + i);
//     i++;
// }

// do {
//     console.log("Do-while loop iteration: " + i);
//     i++;
// } while( i < 5);


// const colors = ["red", "green", "blue"];
// for (const color of colors) {
//     console.log("Color: " + color);
// }   

// const user = {
//     name: "Vivek Banerji",
//     age: 24,
// };
// for (const key in user) {
//     console.log(key + ": " + user[key]);
// }   

// let x = 17;
// if (x % 2 === 0) {
//     console.log(x + " is even.");
// } else {
//     console.log(x + " is odd.");
// }

// let arr = [1, 32, 23, 44, 15, 20, 30, 34 ,65];

// for (let i = 0; i <= 8; i++) {
//     if (arr[i] % 2 != 0) {
//         console.log(arr[i]);
//    }
// }
// let greeting = "Hello, ";
// let name = "Vivek Banerji";

// let textEl = document.getElementById("text-el");

// function hello() {
//     textEl.innerText = name
// }

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saveStr = count + " - "
    // saveEl.innerHTML += saveStr
    saveEl.textContent += saveStr
    count = 0
    countEl.textContent = count
}



