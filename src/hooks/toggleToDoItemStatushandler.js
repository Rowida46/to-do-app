import loadingStatus from "../helpers/loadingStatus";

export const toggleToDoStatushandler = async (todoId, dispatch, completeStatus, setLoadingState) => {
    dispatch({ type: 'TOGGLE_COMPLETE_TODO_ITEM', payload: todoId })

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: !completeStatus }),
            });
        if (!response.ok) {
            throw new Error('Failed to update todo status');
        }
        const data = await response.json();
        dispatch({ type: 'TOGGLE_TODO_STATUS', payload: data });
    } catch (error) {
        setLoadingState(loadingStatus.hasErrores)
    }
}