// import React from 'react'

import { useState } from "react";

const Counter = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [redButton, setRedButton] = useState("");
    const [greenButton, setGreenButton] = useState("");

    const handleRedClick = () => {
        setCounter1(counter1 + 1);
    }

    const handleGreenClick = () => {
        setCounter2(counter2 + 1);
    }

    const handleSmallClick = () => {
        if(counter1 > counter2) {
            setCounter2(counter2 + 1);
        } else if(counter2 > counter1){
            setCounter1(counter1 + 1);
        } else{
            alert("both counter have same value");
        }
    }

    const handleLargeClick = () => {
        if(counter1 > counter2) {
            setCounter1(counter1 - 1);
        } else if(counter2 > counter1){
            setCounter2(counter2 - 1);
        } else{
            alert("both counter have same value");
        }
    }

    const handleSwapClick = () => {
        const newRed = counter2;
        const newGreen = counter1;
        setCounter1(newRed);
        setCounter2(newGreen);
    }

    const handleResetClick = () => {
        setCounter1(0);
        setCounter2(0);
    }

    const handleRedMouseOver = () => {
        if(redButton){
            setRedButton("");
        } else {
            setRedButton("border-red-500");
        }
    }

    const handleGreenMouseOver = () => {
        if(greenButton){
            setGreenButton("");
        } else {
            setGreenButton("border-green-500");
        }
    }


  return (
    <div className="bg-yellow-100 pt-5 pb-56">
        <div className="bg-yellow-300 m-5 border-4 border-yellow-200">
            <h1 className="font-extrabold text-center text-white text-4xl m-4 p-10">Welcome to the World of Numbers!!!</h1>
        </div>
        <div className="grid grid-cols-2 text-center m-20">
            <div className="bg-red-300 border-4 border-red-500 font-bold mr-2">
                Counter 1
                <div className="font-extrabold p-2 text-red-800 text-4xl">{counter1}</div>
            </div>
            <div className="bg-green-300 border-4 border-green-500 font-bold ml-2">
                Counter 2
                <div className="font-extrabold p-2 text-green-800 text-4xl">{counter2}</div>
            </div>
        </div>
        <div className="grid grid-cols-2 text-center m-20">
            <div className="mr-2">
                <button onClick={handleRedClick} onMouseOver={handleRedMouseOver} onMouseLeave={handleRedMouseOver} className={"bg-red-400 py-4 px-20 rounded-2xl border-8 font-bold text-2xl " + redButton}>Red</button>
            </div>
            <div className="ml-2">
                <button onClick={handleGreenClick} onMouseOver={handleGreenMouseOver} onMouseLeave={handleGreenMouseOver} className={"bg-green-400 py-4 px-20 rounded-2xl border-8 font-bold text-2xl " + greenButton}>Green</button>
            </div>
        </div>
        <div className="grid grid-cols-2 text-center m-20">
            <div className="mr-2">
                <button onClick={handleSmallClick} className={"bg-blue-400 py-4 px-20 rounded-2xl border-8 font-bold text-2xl border-blue-600 "}>Add to Smallest</button>
            </div>
            <div className="ml-2">
                <button onClick={handleLargeClick} className={"bg-pink-400 py-4 px-20 rounded-2xl border-8 font-bold text-2xl border-pink-600 "}>Subtract from Largest</button>
            </div>
        </div>
        <div className="grid grid-cols-2 text-center m-20">
            <div className="mr-2">
                <button onClick={handleSwapClick} className={"bg-orange-400 py-4 px-20 rounded-2xl border-8 font-bold text-2xl border-orange-600 "}>Swap</button>
            </div>
            <div className="ml-2">
                <button onClick={handleResetClick} className={"bg-purple-400 py-4 px-20 rounded-2xl border-8 font-bold text-2xl border-purple-600 "}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;