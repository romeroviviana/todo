import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompleteIcon } from '../TodoIcon/CompleteIcons';
import './TodoItem.css'

function TodoItem(
    { 
        text , 
        completed,
        onComplete,
        onDelete
    }
    ){
return(
    <li className={ `list-item ${ completed && "list-item__active"}`}>

        <CompleteIcon 
            completed={ completed }
            onComplete={ onComplete }
        />

        <span className='item__text'>{ text }</span>
        
        <DeleteIcon
            onDelete={ onDelete }
        />
    </li>
);
}

export { TodoItem };