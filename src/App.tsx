import React, {useEffect, useState} from 'react';
import appStyle from './App.module.css'
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";

function App() {
    const [board, setBoard] = useState(new Board())
    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells()
        setBoard(newBoard)
    }

    return (
        <div className={appStyle.app}>
            <BoardComponent setBoard={setBoard} board={board}/>

        </div>
    );
}

export default App;
