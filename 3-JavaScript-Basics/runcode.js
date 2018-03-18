// function divReq (dividend,divisor) {
//     divReqRet = dividend / divisor;
// };
// divReq(5,2);
// console.log(divReqRet);
// divReq(9,3);
// console.log(divReqRet);
// divReq('Nine','Three');
// console.log(divReqRet);

// var array1 = ['I', 'You', 'We'];
// var array2 = ['run', 'swim', 'cycle'];
// function concatArr(arr1,arr2) {
//     console.log('array1['+arr1+']='+array1[arr1] + ' array2['+arr2+']='+array2[arr2], ' Answer='+ array1[arr1] + ' ' + array2[arr2]);
//     concatArrayRet = array1[arr1] + ' ' + array2[arr2];
//     return concatArrayRet 
// };
// concatArr (0,1);
// console.log(concatArrayRet);

// //IIFE example. You do not have to call an IIFE to invoke it. Also called anonymous or self-invoked functions.
// !(function(){
//     console.log('Immediately invoked!')
// })();
// //IIFE Example which assigns the result of the IIFE to a variable.
// var result = (function () { 
//     var name = "Barry"; 
//     return name; 
// })(); 
// console.log(result);
// // console.log(name)


//This is an example of a for loop nested inside a for loop.
firstArray = ['first', 'second', 'third'];
secondArray = ['fourth', 'fifth', 'sixth'];
thirdArray = [];
thirdArray.push(firstArray);
thirdArray.push(secondArray);
console.log(thirdArray);
for (let i = 0; i < thirdArray.length; i++) {
    for (let x = 0; x < thirdArray[i].length; x++) {
        const element = thirdArray[i];
        console.log(element[x])   
    }
    console.log(i);
};