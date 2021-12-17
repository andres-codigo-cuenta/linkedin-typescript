var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
};
function deleteTask(todo) {
    if (todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task!";
    }
}
