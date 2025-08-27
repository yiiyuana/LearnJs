//呼叫函式 vs 參考函式
function getGreeting() {
  return "Hello world";
}

getGreeting(); //在執行這段個函式 -> "Hello world"
getGreeting; //指向getGreeting函式的記憶體位置

//問題:指向記憶體位置能做甚麼

//用變數f來呼叫getGreeting函式
const f = getGreeting;
f();

//設定o物件的a屬性為getGreeting函式位置，並呼叫
const o = {};
o.a = getGreeting;
o.a();

//把陣列1的值改成getGreeting函式位置，用陣列呼叫
const arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();
