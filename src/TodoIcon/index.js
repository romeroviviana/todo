import { ReactComponent as  CheckSVG } from './icon-check.svg'
import { ReactComponent as  DeleteSVG } from './icon-delete.svg'
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <CheckSVG className="icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="icon-svg" fill={color}/>,
};


function TodoIcon({ type, color, onClick }){
    return(
        <span 
            className={`item__btn btn__${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}

        </span>
    )
}

export { TodoIcon };