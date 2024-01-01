import loadingStatus from "../helpers/loadingStatus"

export const removeToDoHandler = async (todoId, dispatch, setLoadingState) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'DELETE',
        });
        console.log('[[[[[[[', response.ok)
        if (!response.ok) {
            throw new Error('Failed to remove todo');
        }
        dispatch({ type: 'REMOVE_TODO', payload: todoId });
    }
    catch {
        setLoadingState(loadingStatus.hasErrores)
    }
}