//函式宣告範例
//製作一個函式(方法)
function sayHello() {
  console.log("hello world");
}

//呼叫他! (Call Function)
sayHello();

//-------

//回傳值

function getGreeting() {
  return "Hello world";
}

//呼叫他! (Call Function)
getGreeting(); //有呼叫成功，但沒有記錄回傳值

//-------
//練習:回傳一個陣列，內容有各種語言的Hello world

function sayHi() {
  const arr = ["Hello", "你好", "Hola"];
  return arr;
}
//把回傳結果存在變數裡
const getHi = sayHi();
console.log(getHi);

//
