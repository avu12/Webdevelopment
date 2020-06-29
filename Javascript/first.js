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