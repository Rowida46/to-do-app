export const addToDoItemHandler = async (item_obj, dispatch, setLoadingState) => {
    try {
        const response = await fetch('YOUR_API_ENDPOINT_HERE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: item_obj.text }),
        });
        if (!response.ok) {
            throw new Error('Failed to add todo');
        }
        const data = await response.json();
        dispatch({ type: 'ADD_TODO', payload: data });
    } catch (error) {
        setError(error.message);
    }
}