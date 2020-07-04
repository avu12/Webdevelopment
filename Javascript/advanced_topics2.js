const basket =['apples', 'oranges', 'grapes'];
const detailedbasket = {
    apples : 5,
    oranges : 10,
    grapes : 1000
}

// for of
//iterating -> strings, arrays

for ( item of basket ){
    console.log(item);
}

//for in
//enumerating -> what is enumarable?
for (item in detailedbasket ) {
    console.log(item)
}
//debugger
const flattened = [[0,1], [2,3],[4,5]].reduce( 
    (accumulator,arr) => {
        debugger;
        accumulator.concat(arr)
    },[]);


//export

export const add = (a,b) => a* b;
//import

import {add} from './add';