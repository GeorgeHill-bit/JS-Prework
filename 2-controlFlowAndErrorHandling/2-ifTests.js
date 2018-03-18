// numberEx = 0;
// stringEx = 'string';
// booleanEx = true;
// console.log(typeof numberEx);
// console.log(typeof stringEx);
// console.log(typeof booleanEx);


// var x = typeof('string');
// switch (x) {
//     case 'string':
//     console.log('String cheese. '+x)
//     break;
//     case 'number':
//     console.log('Numbers are cool! '+x)
//     break;
//     case 'boolean':
//     console.log('Truthiness '+x)
//     break;
//     case 'function':
//     console.log('It is a function '+x)
//     default:
//     console.log('Everything else.')
// }


var x = typeof('string');
x = (x === 'number') ? "Numbers are cool." : (x === 'boolean') ? "Truthiness." : (x === 'string') ? "String cheese." : "Everything else.";
console.log(x);

