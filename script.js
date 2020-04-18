var input = document.querySelector("#inputTask");
var list = document.querySelector("#todoList");

input.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        addTodoItem()
    }
})


function listElement(item) {
    let list = document.createElement('li');
    list.setAttribute("onclick", "editItem(event)")
    let pTag = document.createElement('span');
    let textNode = document.createTextNode(item)
    pTag.appendChild(textNode)
    let button = document.createElement('button');
    button.classList.add("btn-delete")
    button.setAttribute("onclick", "deleteItem(event)")
    let buttonNode = document.createTextNode("Delete")
    button.appendChild(buttonNode)
    list.appendChild(pTag)
    list.appendChild(button)
    return list
}

function addTodoItem() {
    if (input.value) {
        let itemNode = listElement(input.value);
        list.appendChild(itemNode)
        input.value = ''
    }
    checkIsEmpty()
}
function deleteItem(event) {
    let target = event.target
    target.parentNode.parentNode.removeChild(target.parentNode)
    checkIsEmpty()
}

function editItem(event) {
    let target = event.target
    let text = target.firstElementChild.innerText
    let inputBox = `<input id="editInput" value='${text}'/>`
    target.innerHTML = inputBox
    var input = document.querySelector("#editInput");
    input.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            updateTodoItem(target, input.value)
            input.value = ""
        }
    })
}

function checkIsEmpty() {
    if (list.children.length) {
        list.classList.remove("hide")
        document.querySelector(".empty").classList.add("hide")
    } else {
        list.classList.add("hide")
        document.querySelector(".empty").classList.remove("hide")
    }
}

function updateTodoItem(target, value) {
    let itemNode = `<span>${value}</span>
    <button class="btn-delete" onclick ="deleteItem(event);">X</button>`
    target.innerHTML = itemNode
}