import React from "react";
import {GAME_STATE_PLAYING} from '../Helpers/Constants';

const Footer = ({onNewGameClick, onSuggestClick, gameState}) => {
    const renderButtons = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return <div><button onClick={onSuggestClick}>Suggest</button></div>
            default:
                return <div><button onClick={onNewGameClick}>New Game</button></div>
        }
    }
    return(
        <div className="panel footer">
            <div className="header-text">
                {renderButtons()}
            </div>
        </div>
    )
}

export default Footer;