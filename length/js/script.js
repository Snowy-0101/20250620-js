///// lengthプロパティ

// 配列

let fruits = ["apple", "banana", "orange"];
console.log(fruits.length);

// 文字列

let message = "Hello World";
console.log(message.length);


/////演習：文字数カウンター

let textarea = document.getElementById("input");
let countDisplay = document.getElementById("count");

textarea.addEventListener("inputText", () => {
    let length = textarea.value.length;
    countDisplay.textContent = "文字数：" + length;
});
