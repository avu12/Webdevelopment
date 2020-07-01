var button = document.getElementById("enter");
var input = document.getElementById("userinput");
button.addEventListener("click",function(){
    //console.log("Mouse clicked");
})


function addElement(){
    if(input.value.length > 0 ){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        var lista = document.getElementById("list").appendChild(li);
        input.value="";
    }  
}


button.addEventListener("click",function(){
    addElement();
})

input.addEventListener("keypress",function(event){
    if (event.keyCode === 13)
    {
        addElement();
    }
    
})

//scope

// condition ? expr1 :expr2 ;
var t= true;
var  a = t ? "Do this if true" : "Do this if false";
console.log(a);
t = false;
var  a = t ? "Do this if true" : "Do this if false";
console.log(a);

//switch

switch(t){
    case true:
        console.log("Do this if true");
        break;
    case false:
        console.log("Do this if false");
        break;
    default:
        "No meaning of default here";
}

//Destructuring:
const obj = {
    player : 'John',
    exp : 1000
}

const { player, exp } = obj;
console.log(player);
console.log(exp);
/*
const name = 'Snow';
const obj2 ={
    [name] : 'hello',
    ['example' + 'name'] : 'hihi' 
}

console.log(obj2)

const d = 'Simon';
const e = true;
const f = {};

const obj3 = {
    d,
    e,
    f
}
console.log(obj3)
*/
//scring templates:
const name = 'Sally';
const pet ='Doggo';
const greeting = `Hello ${name} your pet is ${pet}`;
console.log(greeting)
console.log(greet());


function greet(name='',pet='cat'){
    return `Hello ${name} your pet is ${pet}`;
}

//Symbols

let sym1 = Symbol();
let sym2 = Symbol("boo");
let sym3 = Symbol("boo");

sym2 === sym3 //false, symbols unique!

//arrow fucntion

function add(a,b){
    return a+b;
}

const add = (a,b) => a+b;