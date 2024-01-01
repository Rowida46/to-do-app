import AddToDoItem from "../components/AddToDoItem"
import ToDoItem from "../components/ToDoItem"

export const ToDoItemList = ({ toggleToDoStatus, todoList, updateToDoStatus, removeToDoStatus }) => {
    return <section class="vh-100" >
        <div class="container py-5 h-100" bgColor="#e2d5de">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card" >
                        <div class="card-body p-5" style={{ borderRadius: '15px!important' }}>
                            <h6 class="mb-3">Awesome Todo List</h6>
                            <AddToDoItem />
                            <ul class="list-group mb-0">{todoList && todoList.map(todo =>
                                < ToDoItem key={todo.id} todoitem={todo} toggleToDoStatus={toggleToDoStatus}
                                    updateToDoStatus={updateToDoStatus} removeToDoStatus={removeToDoStatus} />
                            )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
}