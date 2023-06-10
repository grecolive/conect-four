import React,{useState} from 'react'
import GameCircle from './GameCircle'
import Header from './Header';
import Footer from './Footer';

const NUM_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    const initGameBoard = () => {
        const circles = Array(null);
        for (let i = 0; i < NUM_CIRCLES; i++) {
            circles.push(rederCircle(i));
        }
        return circles;
    }

    const circleClicked = (id) => {
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
        <Header player={currentPlayer}/>
        <div className='gameBoard'>
            {initGameBoard()}
        </div>
        <Footer currentPlayer={currentPlayer}/>
        </>
        
    )
}

export default GameBoard