'use strict';

// const numbers = [
//     1,2,3,4,5,6,7,8,9,10,
//     11,12,13,14,15,16,17,18,19,20,
//     21,22,23,24,25,26,27,28,29,30,
//     31,32,33,34,35,36,37,38,39,40
// ];

/**
 * 与えられた配列から17で割り切れる数を返す関数
 * @param {array} number
 * @retrun {array} numbers
 */
// 練習・自作
//function isMultipleOfSeventeen(number){
//     for (let i of numbers);
//     if (numbers[i] % 17 === 0){
//         console.log (numbers[i]);
//     }
//教材の正答￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

// console.log ('you gat it!');

module.exports = {
    isMultipleOfSeventeen
}
