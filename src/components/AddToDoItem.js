import { useCallback, useState } from "react";

const AddToDoItem = ({ addToDoItem }) => {
    const [todoTitleText, setTodoTitleText] = useState()

    const handleAddToDoTitleText = async () => {
        if (!todoTitleText.trim()) return;
        try {
            console.log(todoTitleText, '[[[')
            const toDoItem = {
                title: todoTitleText,
                completed: false
            }
            await addToDoItem(toDoItem);
            setTodoTitleText('')
        }
        catch (error) { }

    };

    const handleChangeToDoTitleText = useCallback((e) => setTodoTitleText(e.target.value), [])


    return <form class="d-flex justify-content-center align-items-center mb-4">
        <div class="form-outline flex-fill">
            <input type="text" id="form3" class="form-control form-control-lg" value={todoTitleText}
                onChange={(e) => handleChangeToDoTitleText(e)} />
            <label class="form-label" for="form3">What do you need to do today?</label>
        </div>
        <button type="submit" class="btn btn-primary btn-lg ms-2" onClick={() => handleAddToDoTitleText()}>Add</button>
    </form>

}


export default AddToDoItem;