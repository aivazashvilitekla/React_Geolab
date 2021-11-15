let btn = document.getElementById('btn');
let container = document.getElementById('list-container');

// let arr = [];

btn.addEventListener('click', function (){
    
    let inputValue = document.getElementById('inp').value;
    if(inputValue != ""){
        document.getElementById('h3').innerText = "";
        const newDiv = document.createElement("div");
        newDiv.id = "newDiv";
        var p = document.createElement("P");
        var button = document.createElement("button");
        button.id = 'del';
        button.addEventListener('click', function (){
            button.parentNode.remove();
        });
        button.innerText = "Delete";
        p.innerHTML = inputValue;
        newDiv.appendChild(p);
        newDiv.appendChild(button);
        container.appendChild(newDiv);
        document.getElementById('inp').value = "";
    }
    else{
        document.getElementById('h3').innerText = "Enter some text";
    }

    
});
