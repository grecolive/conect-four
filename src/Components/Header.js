import React from "react";

import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WINNER } from '../Helpers/Constants';
const Header = ({gameState, currentPlayer, winPlayer}) => {  
    const renderLabel = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return <div><h1>Player {currentPlayer} Turn</h1></div>
            case GAME_STATE_WINNER:
                return <div><h1>Player {winPlayer} Wins</h1></div>
            case GAME_STATE_DRAW:
                return <div><h1>Game is Draw</h1></div>
            default:
                break;
        }
    }
    return (
        <div className="panel header">
            <div className="header-text">
                {renderLabel()}
            </div>
        </div>
    )
}

export default Header