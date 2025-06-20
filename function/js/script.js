// 関数

// 関数の定義
function sayHello () {
    console.log("こんにちは")
}

// 関数の呼び出し
sayHello();

// 関数（引数あり）

function greet(name) {
    console.log("こんにちは、" + name + "さん")
}

greet ("太郎"); //引数の指定
greet ("花子"); //別の引数の指定
greet ("次郎"); //さらに別の引数の指定

/////演習：商品の値段表示

function callFunc(elm, price) {
    const element = document.querySelector(elm);
    element.textContent = "商品のねだんは" + price + "円です";
}

callFunc("p#product1", 3000);
callFunc("p#product2", 5000);
callFunc("p#product3", 7000);
callFunc("p#product4", 10000);
callFunc("p#product5", 13000);

