import React,{useEffect, useState} from 'react'
import GameCircle from './GameCircle'
import Header from './Header';
import Footer from './Footer';
import { isDraw, isWinner, getComputerMove } from '../Helpers/helper';
import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WINNER, NO_PLAYER, NUM_CIRCLES, PLAYER_1, PLAYER_2 } from '../Helpers/Constants';

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(NUM_CIRCLES).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winnerPlayer, setWinnerPlayer] = useState(NO_PLAYER);

    useEffect(() => {
        initGame();
    },[]);

    const initGame = () => {
        setGameBoard(Array(NUM_CIRCLES).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAYING);
        setWinnerPlayer(NO_PLAYER);
    }

    const initGameBoard = () => {
        const circles = Array(null);
        for (let i = 0; i < NUM_CIRCLES; i++) {
            circles.push(rederCircle(i));
        }
        return circles;
    }

    const suggestMove = () => {
        console.log("suggestMove");
        circleClicked(getComputerMove(gameBoard));
    }

    const circleClicked = (id) => {

        if(gameBoard[id] !== NO_PLAYER || gameState === GAME_STATE_WINNER) return;

        if(isWinner(gameBoard,id,currentPlayer)) {
            setGameState(GAME_STATE_WINNER);
            setWinnerPlayer(currentPlayer);
        }

        if(isDraw(gameBoard,id,currentPlayer)) {
            setGameState(GAME_STATE_DRAW);
            setWinnerPlayer(NO_PLAYER);
        }

        setGameBoard(prev => {
           return prev.map((circle, position) => {
                if (position === id) {
                    return currentPlayer;
                }
                return circle;
            }  )
        });

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        

        console.log(gameBoard);
        console.log(currentPlayer);
    }
    
    const rederCircle = (id) => {
        return <GameCircle key={id} id={id} onCircleClicked={circleClicked} className={`player_${gameBoard[id]}`}/>
    }

    return (
        <>
        <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winnerPlayer}/>
        <div className='gameBoard'>
            {initGameBoard()}
        </div>
        <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
        </>
        
    )
}

export default GameBoard