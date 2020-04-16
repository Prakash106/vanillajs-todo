var input = document.querySelector("#inputTask");
var list = document.querySelector("#todoList");

input.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addTodoItem(input.value)
        input.value = ""
    }
})

function listElement(item){
    let list =document.createElement('li');
    list.classList.add("listItem")
    list.setAttribute("onclick","editItem(event)")
    let pTag =document.createElement('p');
    let textNode=document.createTextNode(item)
    pTag.appendChild(textNode)
    let button =document.createElement('button');
    button.classList.add("btn")
    button.setAttribute("onclick","deleteItem(event)")
    let buttonNode=document.createTextNode("X")
    button.appendChild(buttonNode)
    list.appendChild(pTag)
    list.appendChild(button)
    return list
}

function addTodoItem(item) {
    let itemNode = listElement(item);
    list.appendChild(itemNode)
}
function deleteItem(event){
    let target=event.target
    target.parentNode.parentNode.removeChild(target.parentNode)
}

function editItem(event){
    let target=event.target
    let text=target.firstElementChild.innerText
    let inputBox=`<input id="editInput" value='${text}'/>`
    target.innerHTML=inputBox
    var input = document.querySelector("#editInput");
    input.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            updateTodoItem(target,input.value)
            input.value = ""
        }
    })
}

function updateTodoItem(target,value){
    let itemNode = `<p>${value}</p>
    <button class="btn" onclick ="deleteItem(event);">X</button>`
    target.innerHTML=itemNode
}