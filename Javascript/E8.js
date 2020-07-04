'Turtle'.padStart(10); // space added before string to fill 10 char
'Turtle'.padEnd(10); // space added before string to fill 10 char

//confortable syntax
const fun = (a,b,c,d,) =>{
    console.log(a);
}
fun(1,2,3,4,)

//
Object.values
Object.entries

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
}

Object.values(obj).forEach(element => {
    console.log(element)
});

Object.entries(obj).forEach(element => {
    console.log(element)
});

Object.entries(obj).map(value=>{
    return value[1] + value[0].replace("username",'');
})