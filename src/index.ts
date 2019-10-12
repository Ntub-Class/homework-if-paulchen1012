// 請介紹兩個字串方法跟數字方法
//
//介紹兩個String的用法
//第一個String.prototype.substr()
//範例
//let str = 'Mozilla';
//console.log(str.substr(1, 2));
//解釋
//從第一個字之後開始取兩個字，輸出結果=oz
//------------------------------------------------------------------------------------
//第二個String.replace()
//範例
//let a = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
//console.log(a.replace('dog', 'monkey'));
//解釋
//把字串中的dog改成monkey
//輸出結果=he quick brown fox jumps over the lazy monkeys. If the dog reacted, was it 


//------------------------------------------------------------------------------------


//介紹兩個Number的用法
//第一個Number.isInteger()
//範例
//function fits(x, y) {
//    if (Number.isInteger(y / x)) {
//        return 'Fits!';
//    }
//    return 'Does NOT fit!';
//}
//解釋
//如果目標值為整數，則返回true，否則返回false。
//如果值為NaNor Infinity，則返回false。該方法還將返回true 可表示為整數的浮點數。
//------------------------------------------------------------------------------------
//第二個"!=="
//範例 
//6 !== 2 + 3;
//解釋
//!==用來判斷左邊的值跟右邊的值是否不相同
//結果為true




// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money <= 500000 && money >= 270000)
    console.log("乾爹!")
else if (money < 270000)
    console.log("你這廢物!")
else
    console.log("Error!") 