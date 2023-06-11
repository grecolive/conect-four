import React from "react";
import { GAME_STATE_PLAYING} from '../Helpers/Constants';

const Footer = ({onNewGameClick, onSuggestClick, gameState}) => {
    return(
        <div className="panel footer">
            <div className="header-text">
                {gameState === GAME_STATE_PLAYING ? <button onClick={onSuggestClick}>Suggest</button> : null}
                {gameState !== GAME_STATE_PLAYING ? <button onClick={onNewGameClick}>New Game</button> : null}
            </div>
        </div>
    )
}

export default Footer;