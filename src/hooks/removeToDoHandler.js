import loadingStatus from "../helpers/loadingStatus"

export const removeToDoHandler = async (todoId, dispatch, setLoadingState) => {
    try {
        const response = await fetch(`http://localhost:8000/todos/${todoId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to remove todo');
        }
        dispatch({ type: 'REMOVE_TODO', payload: todoId });
    }
    catch {
        setLoadingState(loadingStatus.hasErrores)
    }
}