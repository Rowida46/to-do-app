import loadingStatus from "../helpers/loadingStatus";

export const updateToDoStatushandler = async (todoId, dispatch, newText, setLoadingState) => {
    try {
        const response = await fetch(`http://localhost:8000/todos/${todoId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newTitle: newText }),
            });
        if (!response.ok) {
            throw new Error('Failed to update todo status');
        }
        dispatch({ type: 'UPDATE_TODO', payload: { newText, id: todoId } });
    } catch (error) {
        setLoadingState(loadingStatus.hasErrores)
    }
}