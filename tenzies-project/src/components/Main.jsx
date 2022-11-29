import { useState } from 'react'
import Die from './Die'
export default function Main() {
    return(
        <main className="px-7">
            <p className="py-3">Roll until all the dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <Die/>
            <button 
                className="bg-blue-600 px-8 text-xl py-1 text-white rounded-lg
                hover:bg-blue-700 active:bg-blue-800">
                Roll
            </button>
            <div className="font-bold flex justify-center">
                <p className="p-4">Number of rolls:</p>
                <p className="p-4">Record:</p>
            </div>
        </main>
    )
}