const AddToDoItem = () => {
    return <form class="d-flex justify-content-center align-items-center mb-4">
        <div class="form-outline flex-fill">
            <input type="text" id="form3" class="form-control form-control-lg" />
            <label class="form-label" for="form3">What do you need to do today?</label>
        </div>
        <button type="submit" class="btn btn-primary btn-lg ms-2">Add</button>
    </form>

}


export default AddToDoItem;