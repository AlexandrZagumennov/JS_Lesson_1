//Задание 1

let myName;
let boss;

myName = 'Alexandr';
boss = myName;

alert(`Добрый день, ${boss}`);


//Задание 2

const result1 = '' + 2 + 0;
const result2 = '' - 2 + 0;
const result3 = '4' > '22';
const result4 = 4 + 7 + 'px';
const result5 = '3px' - 5;
const result6 = '30px' + '50px';
const result7 = '50px' - '30px';

console.log(result1); //20, результат строка, так как один из операндов строка, произошла конкотинация строк при помощи унарного +
console.log(result2); //- 2, результат число, произошла математическая операция сложения
console.log(result3); // true, так как сравниваются две строки в лексикографическом порядке
console.log(result4); // 11px, строка, так как сначала произошло сложение двух чисел, а затем конкотинация со строкой, всё в порядке приоритета операций
console.log(result5); // NaN, получается НЕчисло, (- в отличие от + не приводит к строке),  так как '3px' строка, а не число, то математическое действие вычитание строки и числа даёт НЕчисло
console.log(result6); //30px50px, конкотинация строк
console.log(result7); //NaN, математическое действие вичитание строк (НЕчисел) даёт результат НЕчисло