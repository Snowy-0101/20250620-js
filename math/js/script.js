///// 端数処理

let num = 3.5;

//切り捨て
let result1 = Math.floor(num);
console.log(result1); //3

//切り上げ
let result2 = Math.ceil(num);
console.log (result2); //4

//四捨五入
let result3 = Math.round(num);
console.log (result3); //4

/////乱数処理

let random = Math.random ();
console.log(random); //0以上1未満の乱数


/////演習：🎲サイコロを振る

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("result").textContent = "出た目は: " + dice;
}