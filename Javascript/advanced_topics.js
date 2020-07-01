//closure:
const first = () => {
    const greet ='Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//currying

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) =>a*b;
curriedMultiply(3)(4);

//compose
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num +1;
const double = (num) => num *2;

compose(sum,double)(2);

//advanced array

const array = [1,2,10,16];
const double = []
const newArray = array.forEach((num) => {
    double.push(num *2); //multiple inscruction can be here based  the on array!
})

//map, filter, reduce

const mapArray = array.map((num) =>{
    return num *2; //scrict rules, returns a collections!
})
//filter
const filterArray = array.filter((num) =>{
    return num > 5; //scrict rules, returns a collections!
})


//reduce
const reduceArray = array.reduce((accumulator, num) =>{
    return accumulator + num;
},0);

//refference type 
var obj1 = {value : 10};
var obj2 = obj1;
var obj3 = {value : 10};

obj1 === obj2 //true
obj1 === obj3 //false

//context vs scope

this // where we is? inside what object? 
const obj4 = {
    a: function(){
        console.log(this)
    }
}


//instantitation

class Player {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce()
    {
        console.log("Hi! I am a player!");
    }
}

class Wizard extends Player{
    constructor(name,type){
        super(name,type);
    }
    play(){
        console.log(`Hi! I am a ${this.type}`);
    }
}

const w1 = new Wizard('Petkar', 'Paladin or something');
const w2 = new Wizard('notPetkar', 'Rogue');
