import React from 'react'

function GameOver(props) {
    return(
        <div className='GameBoard'
            style={{width: props.width, height: props.height, borderWidth: props.width / 50}}>
            <div className='GameOver'
                style={{fontSize: props.width / 15}}>
                <div class="GameOverText">GAME OVER</div>
                <div>Your score: {props.score}</div>
                <div>{props.newHighScore ? 'New local ' : 'Local '}high score: {props.highScore}</div>
                <div class="PressSpaceText">Press Space to restart</div>
            </div>
        </div>
    )
}

export default GameOver