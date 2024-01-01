import LoadingIndicator from "../components/LoadingIndicator";
import ToDoItem from "../components/ToDoItem";
import loadingStatus from "../helpers/loadingStatus";
import useTodoList from "../hooks/useTodoList";
import { ToDoItemList } from "./ToDoItemList";

const Home = () => {
    const { todoList, loadingState, updateToDoStatus, toggleToDoStatus, removeToDoStatus, addToDoItem } = useTodoList();
    return loadingState !== loadingStatus.loaded ? (
        <LoadingIndicator msg={loadingState} />
    ) : (
        <ToDoItemList toggleToDoStatus={toggleToDoStatus} updateToDoStatus={updateToDoStatus}
            removeToDoStatus={removeToDoStatus} todoList={todoList} addToDoItem={addToDoItem} />
    );

}


export default Home;
