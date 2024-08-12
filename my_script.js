//prdev.html

$(document).ready(function(){
    $('#button1').click(function(){
        var url = 'https://chat.openai.com';
        window.open(url, '_blank');
    })
});
//https://www.youtube.com/watch?v=aN8V-Ah2y4Q


//boodschappen.html
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("container-lijst");

function addTask(){
    if(inputBox.value === ''){
        alert("Vul iets in");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}), false;

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()