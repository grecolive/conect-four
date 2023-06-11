import React from "react";

const Footer = ({onNewGameClick, onSuggestClick}) => {
    return(
        <div className="panel footer">
            <div className="header-text">
                <button onClick={onNewGameClick}>New Game</button>
                <button onClick={onSuggestClick}>Suggest</button>
            </div>
        </div>
    )
}

export default Footer;