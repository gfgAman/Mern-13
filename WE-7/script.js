// console.log(abc);
// console.log();
// abc()
// function abc(){
//     console.log('this is a function');
// }

// console.log(a);
// var a = 100000

// const a = 10
// {
    
//      a = 100
// }
// console.log(a,'after let');


// var a = 10
// {
//     var a = 100
// }
// console.log(a);

// var a = 'outer scope'

// function abc(){
//     var a = 'inner scope'
//     console.log(a);
// }

// abc()
// console.log(a);


// function outerFunc(){
//     const a = 'hello'

//     function innerFunc(){
//         const a = 'hiiiii'
//         console.log(a);
//     }
//     innerFunc()
// }
// outerFunc()

//length,push,pop,shift,unshift,flat,slice,splice,indexOf, concat,reverse,sort,toString,join,find,replace,includes
// console.log(arr.length);

// arr.push(100,567890)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.shift()
// console.log(arr);

// arr.unshift(1999)
// console.log(arr);

// const nestedArr = [1,[2,[3,[4,[5,[6]]]]]]
// console.log(nestedArr.length,'length');
// console.log(nestedArr.flat(Infinity));

// const slicedArr = arr.slice(1,4)
// console.log(slicedArr,'slicedArr');
// console.log(arr,'arr');

// arr.splice(1,10,4000)
// console.log(arr);


// console.log(arr.indexOf(6));

// console.log(arr.concat(arr2));

//es6=>spread and rest operators(...)

function abc([a,b,...c,d]){
    console.log(a);
    console.log(b);
    console.log(c);
}

const arr = [9,4,7,1,6,8]
abc(arr)
// const arr2 = [1,2,3]
// const arr3 = [...arr,...arr2]
// console.log(arr3);