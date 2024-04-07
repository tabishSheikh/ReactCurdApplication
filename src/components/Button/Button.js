import React from "react";
import './Button.scss';

const Button = props => {
    return(
        <div className="Button">
            <button onClick={ props.onClick}>{ props.title }</button>
        </div>
    );
}
export default Button;