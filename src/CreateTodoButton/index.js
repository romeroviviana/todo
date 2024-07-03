import './CreateTodoButton.css'

function CreateTodoButton( { setOpenModal }){
    return(
        <button 
            className="btn__add"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        >
            <i className="fa-solid fa-plus"></i>
        </button>
    );
}
    
export { CreateTodoButton };