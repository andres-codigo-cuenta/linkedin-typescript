var $ = function (selector) {
    // Find DOM element
};
$.version = 1.18;
/* END: Extending interface */
$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var todo = { name: "Pick up drycleaning" };
var container = $('#container');
container.data('todo', todo);
var savedTodo = container.data('todo');
container.todo(todo);
