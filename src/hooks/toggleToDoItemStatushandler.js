import loadingStatus from "../helpers/loadingStatus";

export const toggleToDoStatushandler = async (todoId, dispatch, completeStatus, setLoadingState) => {
    dispatch({ type: 'TOGGLE_COMPLETE_TODO_ITEM', payload: todoId })

    try {
        const response = await fetch(`http://localhost:8000/todos/toggle/${todoId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isCompleted: !completeStatus }),
            });
        console.log(response, 'lll', todoId)
        if (!response.ok) {
            throw new Error('Failed to update todo status');
        }
        const data = await response.json();
        dispatch({ type: 'TOGGLE_TODO_STATUS', payload: data });
    } catch (error) {
        setLoadingState(loadingStatus.hasErrores)
    }
}