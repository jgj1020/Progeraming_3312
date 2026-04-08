function TodoListApp() {
    return (
        <div>   
            <h1>No Think, Do It.</h1>
            <form>
                <input type="text"/>
                <button>Add</button>
            </form>
            <ui>
                <li>
                <input type="checkbox" name="" id="chk-1" />
                <label htmlFor="chk-1">think</label>
                <button>🐧</button>
                <button>❌</button>
                </li>
            </ui>
        </div>
    )
}

export default TodoListApp;