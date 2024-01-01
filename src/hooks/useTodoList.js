import { useReducer } from "react";
import { todoReducer } from "../store/toDoReducer";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import loadingStatus from "../helpers/loadingStatus";
import { toggleToDoStatushandler } from "./toggleToDoItemStatushandler";
import { updateToDoStatushandler } from "./updateToDoItemHandler";
import { removeToDoHandler } from "./removeToDoHandler";

const useTodoList = () => {
    const initialState = {
        todoList: [],
        loading: true,
    };

    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const setTodoWrapper = useCallback((todos) => { dispatch({ type: 'SET_TODO', payload: todos }) }, [])

    //setup & get todos
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingState(loadingStatus.isLoading)
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?limit=4');
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                const data = await response.json();
                // Get only the first 10 items
                const firstTenItems = data.slice(0, 3);
                setTodoWrapper(firstTenItems)
                setLoadingState(loadingStatus.loaded)
            } catch (error) {
                setLoadingState(loadingStatus.hasErrores)
            }
        }
        return () => fetchData()
    }, [])

    const toggleToDoStatus = useCallback(async (todoId, completeStatus) =>
        toggleToDoStatushandler(todoId, dispatch, completeStatus, setLoadingState), [])

    const updateToDoStatus = useCallback(async (todoId, newText) =>
        updateToDoStatushandler(todoId, dispatch, newText, setLoadingState), [])

    const removeToDoStatus = useCallback(async todoId =>
        removeToDoHandler(todoId, dispatch, setLoadingState), [])

    return { todoList: state?.todoList, loadingState, toggleToDoStatus, updateToDoStatus, removeToDoStatus }
}


export default useTodoList;