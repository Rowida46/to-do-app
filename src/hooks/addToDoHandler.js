import loadingStatus from "../helpers/loadingStatus";

export const addToDoItemHandler = async (item_obj, dispatch, setLoadingState) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item_obj),
        });
        if (!response.ok) {
            throw new Error('Failed to add todo');
        }
        const data = await response.json();
        dispatch({ type: 'ADD_TODO', payload: data });
    } catch (error) {
        setLoadingState(loadingStatus.hasErrores)
    }
}