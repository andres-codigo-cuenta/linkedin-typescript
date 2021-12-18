// Interfaces intend or expect to happen


interface Todo {
    name: string;
    completed?: boolean;
}

interface ITodoService {
    add(todo: Todo): Todo;
    delete(todo: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

var todo: Todo = {
    name: "Pick up drycleaning"
};