var input = document.querySelector("#inputTask");
var list = document.querySelector("#todoList");

input.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addTodoItem(input.value)
        input.value = ""
    }
})


function addTodoItem(item) {
    let itemNode = document.createElement("li");
    let textNode = document.createTextNode(item);

    itemNode.appendChild(textNode);
    list.appendChild(itemNode)
}