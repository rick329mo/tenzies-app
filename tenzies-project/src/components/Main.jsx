import React, { useState, useEffect } from 'react'
import Die from './Die'


export default function Main() {
    
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: Math.floor(Math.random() * 20)
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i , 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                die :
                generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die
        }))
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />  
    ))

    return(
        <main className="px-7">
            <p className="py-3">Roll until all the dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div>
                {diceElements}
            </div>
            <button 
                className="bg-blue-600 px-8 text-xl py-1 text-white rounded-lg
                hover:bg-blue-700 active:bg-blue-800" onClick= {rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
            <div className="font-bold flex justify-center">
                <p className="p-4">Number of rolls:</p>
                <p className="p-4">Record:</p>
            </div>
        </main>
    )
}