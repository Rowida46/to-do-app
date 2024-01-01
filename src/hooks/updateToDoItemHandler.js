import loadingStatus from "../helpers/loadingStatus";

export const updateToDoStatushandler = async (todoId, dispatch, newText, setLoadingState) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newText }),
            });
        if (!response.ok) {
            throw new Error('Failed to update todo status');
        }
        dispatch({ type: 'UPDATE_TODO', payload: { newText, id: todoId } });
    } catch (error) {
        setLoadingState(loadingStatus.hasErrores)
    }
}