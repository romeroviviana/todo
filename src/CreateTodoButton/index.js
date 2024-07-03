import './CreateTodoButton.css'

function CreateTodoButton(){
    return(
        <button 
            className="btn__add"
            onClick={(event) => {
                console.log("Hello")
            }}
        >
            <i className="fa-solid fa-plus"></i>
        </button>
    );
}
    
export { CreateTodoButton };