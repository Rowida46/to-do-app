export const todoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                todoList: [...state.todoList, ...action.payload],
                loading: false
            }
        case "TOGGLE_COMPLETE_TODO_ITEM":
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload ?
                    { ...todo, completed: !todo.completed } : todo)

            }
        case "ADD_TODO":
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case "UPDATE_TODO":
            return {
                ...state,
                todoList: state.todoList.map(todo =>
                    todo.id === action.payload.id ? { ...todo, title: action.payload.newText } : todo
                )
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
};
