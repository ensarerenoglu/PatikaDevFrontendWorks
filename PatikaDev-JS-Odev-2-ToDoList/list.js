/*To Do List */
let taskTxt = document.getElementById("task")
let array = [];
if (GetLocalStorage("list") != null) {
    array = GetLocalStorage("list")
}
else{
    array = new Array();
}

function LoadStorage(){
    if (array != null) {
        for (let index = 0; index < array.length; index++) {
            let Li = document.createElement("li");
            Li.innerText = array[index];
            document.getElementById("list").appendChild(Li);  
            AddCloseButton(Li);
            Li.addEventListener("click",ChangeLiStyle)
        }
    }
}
function ChangeLiStyle(){
    if (this.classList.contains("checked")) {
        this.classList.remove("checked");
    }
    else{
        this.classList.add("checked");
    }
   }

function AddLi(){
    let newLi = document.createElement("li");
    let text = taskTxt.value;
    if (text.trim() != "") {
        newLi.innerText = text
        array.push(text);
        SetLocalStorage(array);
        taskTxt.value = "";
        $("#liveToastAdded").toast("show");
        
    }
    else{
        $("#liveToastNotAdded").toast("show");
        return;
    };
    document.getElementById("list").appendChild(newLi);  
    AddCloseButton(newLi);
    newLi.addEventListener("click",ChangeLiStyle)
    taskTxt.value="";
}

function AddCloseButton(parentDom)
{
    let btn = document.createElement("button");
    btn.innerText= "X";
    btn.classList.add("btn-close","rounded-circle","border-0");
    btn.style.float="right";
    parentDom.appendChild(btn);
    btn.addEventListener('click',DeleteLi)
}

function DeleteLi()
{
    this.parentElement.remove();
    let text = this.parentElement.innerText;
    let newtxt = text.substring(0,(text.length-1));
    DeleteFromArray(newtxt);
}
function SetLocalStorage(anyArray){
    localStorage.setItem("list",JSON.stringify(anyArray));
}
function GetLocalStorage(name){
    return JSON.parse(localStorage.getItem(name));
}
function DeleteFromArray(text){
    let index= array.indexOf(text);
    array.splice(index,1);
    SetLocalStorage(array);
}


