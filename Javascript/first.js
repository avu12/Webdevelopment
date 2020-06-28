function sayHello(){
    console.log("Hi");
}
//other way:
var sayBye = function(){
    console.log("Bye");
}

4 + 3;

if (4+3 ===7){
//alert("GG EZ");
console.log("Example log")
}
sayHello();
sayBye();

var list = ["a","b","c"]
var list2 = ["a",list, undefined,true]
console.log(list[2])
console.log(list2[1])

/*var user ={
    name : "John",
    age : 56,
    shout:function(){
        console.log("AAAAA");
    }
};

console.log(user.name);
user.shout();*/
nullO = null;
emptyO = {};
emptyO.name = "Not so empty anymore";
console.log(emptyO.name)

//EXERICE

var db =[
    {
        username : "Peter",
        password : "SupaSecret123",
    }
]

var newsFeed = [
    {
        username : "Bobby",
        timeline : "Bulls*it",
    },

]
var userNamePrompt = prompt("Username:");
var pwd = prompt("What is your password?");
signIn(userNamePrompt,pwd);


for (var i =0; i<newsFeed.length;i++){
    console.log(newsFeed[i]);
}

var counter =10;

while(counter >0){
console.log(counter);
counter--;
} 
/*
newsFeed.forEach(function(newsFeed,i){
    console.log(newsFeed.username);
});*/

var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});



var a  = document.querySelector("h1");
console.log(a);









 function signIn(user,pass){
    if( user === db[0].username && pass === db[0].password)
    {
        alert("Logged in!");
        console.log(newsFeed);
        return;
    }
    else{
        alert("Invalid username/password");
        return;
    }
    

 }


