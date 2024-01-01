import React, { useCallback, useState } from "react";

const ToDoItem = React.memo(({ todoitem, updateToDoStatus, toggleToDoStatus, removeToDoStatus }) => {
    const { title, completed, id } = todoitem;
    const [isEditing, setisEditing] = useState(false)
    const [editingText, seteditingText] = useState(title)

    const handleCheckboxChange = (todoId, completeStatus) => {
        toggleToDoStatus(todoId, completeStatus)

    };

    const handleUpdateText = () => {
        updateToDoStatus(id, editingText)
        setisEditing(false)
    };

    const handleChangeEditText = useCallback((e) => seteditingText(e.target.value), [editingText])

    return (
        <li
            class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            {!isEditing ? (
                <><div class="d-flex align-items-center">
                    <input class="form-check-input me-2" type="checkbox" value="" aria-label="..."
                        checked={!completed} onClick={() => handleCheckboxChange(id, completed)} />
                    {title}
                </div>
                    <div>
                        <a href="#!" class="text-info m-4" data-mdb-toggle="tooltip" title="Edit todo"
                            onClick={() => setisEditing(true)}
                        ><i
                            class="fas fa-pencil-alt me-3"></i></a>

                        <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo"
                            onClick={() => removeToDoStatus(id)}
                        ><i
                            class="fas fa-trash-alt"></i></a>

                    </div></>
            ) : (<>
                <div class="d-flex align-items-center">
                    <input class="form-check-input me-2" type="input" value={editingText} aria-label="..."
                        onChange={(e) => handleChangeEditText(e)}
                    />
                </div>
                <><button className="d-flex-end" onClick={() => handleUpdateText()}>save</button></>
            </>)
            }

        </li >
    )
});



export default ToDoItem;