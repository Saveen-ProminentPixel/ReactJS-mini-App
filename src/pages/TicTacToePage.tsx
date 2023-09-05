// import React from 'react'

import { useState } from "react"

const winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const xWins = [false, false, false, false, false, false, false, false, false, false];
const oWins = [false, false, false, false, false, false, false, false, false, false];

const TicTacToePage = () => {

    const [xTurn, setXTurn] = useState(true);

    const[one, setOne] = useState(".");
    const[two, setTwo] = useState(".");
    const[three, setThree] = useState(".");
    const[four, setFour] = useState(".");
    const[five, setFive] = useState(".");
    const[six, setSix] = useState(".");
    const[seven, setSeven] = useState(".");
    const[eight, setEight] = useState(".");
    const[nine, setNine] = useState(".");

    function whoIsTheWinner() {

        let won: string = "a";
        console.log(won);

        for(let i=0; i<winningArray.length; i++){
            const arr = winningArray[i];
            // console.log(xWins[arr[0]], xWins[arr[1]], xWins[arr[2]])
            if(xWins[arr[0]] === true && xWins[arr[1]] === true && xWins[arr[2]] === true){
                won = "X";
                // console.log(won);
                return won;
            }
            else if(oWins[arr[0]] && oWins[arr[1]] && oWins[arr[2]]){
                won = "O";
                return won;
            } 
        }
        return won;

        // const xWinner: boolean = winningArray.forEach(element => {
        //     let won: boolean = false;
        //     for(let i=0; i<element.length; i++){
        //         if(xWins[element[i]] === true){
        //             won = true;
        //         } else {
        //             won = false;
        //             return;
        //         }
        //     }
        //     return won;
        // });

        // const oWinner: boolean = winningArray.forEach(element => {
        //     let won: boolean = false;
        //     for(let i=0; i<element.length; i++){
        //         if(oWins[element[i]] === true){
        //             won = true;
        //         } else {
        //             won = false;
        //             return;
        //         }
        //     }
        //     return won;
        // });

        // if(xWinner === true){
        //     return "X";
        // } else if(oWinner === true){
        //     return "O";
        // } else{
        //     return "";
        // }
    }

    const handleButtonClick = (index, xTurn) => {
        const winner = whoIsTheWinner();

        if(winner == "X"){
            alert("X won");
        } else if(winner == "O") {
            alert("O won");
        } else {
            if(xTurn){
                xWins[index] = true;
                console.log(xWins);
                if(index === 1 && one === ".") {
                    setOne("X");
                }
                if(index === 2 && two === ".") {
                    setTwo("X");
                }
                if(index === 3 && three === ".") {
                    setThree("X");
                }
                if(index === 4 && four === ".") {
                    setFour("X");
                }
                if(index === 5 && five === ".") {
                    setFive("X");
                }
                if(index === 6 && six === ".") {
                    setSix("X");
                }
                if(index === 7 && seven === ".") {
                    setSeven("X");
                }
                if(index === 8 && eight === ".") {
                    setEight("X");
                }
                if(index === 9 && nine === ".") {
                    setNine("X");
                }
                setXTurn(false);
            }
            else{
                oWins[index] = true;
                console.log(oWins);
                if(index === 1 && one === ".") {
                    setOne("O");
                }
                if(index === 2 && two === ".") {
                    setTwo("O");
                }
                if(index === 3 && three === ".") {
                    setThree("O");
                }
                if(index === 4 && four === ".") {
                    setFour("O");
                }
                if(index === 5 && five === ".") {
                    setFive("O");
                }
                if(index === 6 && six === ".") {
                    setSix("O");
                }
                if(index === 7 && seven === ".") {
                    setSeven("O");
                }
                if(index === 8 && eight === ".") {
                    setEight("O");
                }
                if(index === 9 && nine === ".") {
                    setNine("O");
                }
                setXTurn(true);
            }
        }

        
        

    }

  return (
    <div className="bg-purple-400 pb-56">
        <div className="text-center flex px-72 bg-lime-400 pb-10">
            <h1 className="font-extrabold w-1/3 text-4xl pt-10 text-cyan-500">Tic</h1>
            <h1 className="font-extrabold w-1/3 text-4xl pt-10 text-red-500">Tac</h1>
            <h1 className="font-extrabold w-1/3 text-4xl pt-10 text-green-500">Toe</h1>
        </div>
        <div className="text-center mt-36 p-10">
            <div>
                <button onClick={() => handleButtonClick(1, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{one}</button>
                <button onClick={() => handleButtonClick(2, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{two}</button>
                <button onClick={() => handleButtonClick(3, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{three}</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick(4, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{four}</button>
                <button onClick={() => handleButtonClick(5, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{five}</button>
                <button onClick={() => handleButtonClick(6, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{six}</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick(7, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{seven}</button>
                <button onClick={() => handleButtonClick(8, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{eight}</button>
                <button onClick={() => handleButtonClick(9, xTurn)} className="m-2 border-2 w-12 h-12 border-black bg-slate-200">{nine}</button>
            </div>
        </div>
    </div>
  )




}

export default TicTacToePage;