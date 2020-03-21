import React from 'react';
import { useState } from 'react';
import './ttt.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    componentDidMount(){
        if (!this.props.isFirst) {
            const history = this.state.history.slice(0, this.state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            squares[0] = 'O';
            this.setState({
                history: history.concat([{
                    squares: squares,
                }]),
                stepNumber: history.length
            });
            this.props.noLoop();
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = 'X';
        // console.log(calculateWinner(squares));
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            // xIsNext: !this.state.xIsNext,
        });
        if (calculateWinner(squares)) {
            return;
        }
        // ai move after
        let bestMove = aiMove(squares);
        squares[bestMove] = 'O';
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const description = move ?
                'Go to move #' + move :
                'Clear Board';
            return (
                <li key={move}>
                    <button className="moves-button" onClick={() => this.jumpTo(move)}>{description}</button>
                </li>
            );
        });

        let status;
        if (winner === 'Draw') {
            status = winner;
        } else if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (!squares.includes(null)) {
        return 'Draw';
    } else {
        return null;
    }
}

const aiMove = (boardState) => {
    //AI's turn
    let bestScore = -Infinity;
    let move;
    boardState.forEach((box, idx) => {
        if (box === null) {
            boardState[idx] = "O";
            // console.log(boardState);
            let score = minimax(boardState, false);
            boardState[idx] = null;
            //giving bot 20% chance to not make the best move
            if (score > bestScore && Math.random() > 0.2) {
                bestScore = score;
                // console.log(bestScore)
                move = idx;
            }
        }
    })
    return move;
}

let scores = {
    X: -1,
    O: +1,
    Draw: 0
};

function minimax(boardState, isMaximizing) {
    let result = calculateWinner(boardState);
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        boardState.forEach((box, idx) => {
            if (box === null) {
                boardState[idx] = "O"
                let score = minimax(boardState, false);
                boardState[idx] = null;
                bestScore = Math.max(score, bestScore);
            }
        })
        return bestScore;
    } else {
        let bestScore = Infinity;
        boardState.forEach((box, idx) => {
            if (box === null) {
                boardState[idx] = "X"
                let score = minimax(boardState, true);
                boardState[idx] = null;
                bestScore = Math.min(score, bestScore);
            }
        })
        return bestScore;
    }
}

function Ttt() {
    const [gameStart, setGameStart] = useState(false);
    const [isFirst, setIsFirst] = useState(true);

    const handleFirstTurn = (isFirst) => {
        setIsFirst(isFirst);
        // console.log(isFirst);
    }
    const handleGameStart = () => {
        setGameStart(true);
    }

    return (
        <React.Fragment>
            <div className='game-name'>Tic Tac Toe With AI</div>
            {
                (gameStart) ?
                    <Game isFirst={isFirst} noLoop={()=>setIsFirst(true)}/> : (
                        <div className="game-menu">
                        <div className="check" style={{top: `${isFirst?'50px':'85px'}` }}><i className='fa fa-check selected' aria-hidden="true" /></div>
                        <button className='game-menu-button' onClick={() => {handleFirstTurn(true)}}>Go First</button>
                        <button className='game-menu-button' onClick={() => {handleFirstTurn(false)}}>Go Second</button>
                            <button className="game-menu-button" onClick={handleGameStart}>Start game</button>
                        </div>)
            }
        </React.Fragment>
    )
}
// ========================================

export default Ttt;