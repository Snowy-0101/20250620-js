// for文

for (let i = 0; i < 5; i++) {
    console.log(i);
}

///// 演習：星の三角形

let output = "";
for (let i = 1; i <= 10; i++) {
  output += "★".repeat(i) + "\n"; // \nは改行文字
}
document.getElementById("stars").textContent = output;