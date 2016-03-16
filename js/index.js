var submitButton = document.getElementById("submitButton");
var form = document.getElementById("form");
var todo = document.getElementById("todo");
var ul = document.getElementById("ul");

submitButton.addEventListener("click", function(evt){
    evt.preventDefault();
    if (todo.value==="") {
        alert("Please fill out the form.");
    } else{
        var li = document.createElement("li");
        var p = document.createElement("p");
        ul.appendChild(li);
        li.appendChild(p);
        p.textContent = todo.value;
        todo.value = ""
    }
})
