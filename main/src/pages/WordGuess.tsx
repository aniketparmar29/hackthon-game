import React, { useState, useEffect, useCallback } from 'react'
import words from "../words.json"
import { WordGuessWord } from '../WordGuessComponents/WordGuessWord'
import { WordGuessKeyboard } from '../WordGuessComponents/WordGuessKeyboard'

function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

type  props = {
    userId:number
}

const WordGuess = ({userId}:props) => {
    const [wordToGuess, setWordToGuess] = useState(getWord);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    console.log(wordToGuess)
    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess
        .split("")
        .every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return

            setGuessedLetters(currentLetters => [...currentLetters, letter])
        },
        [guessedLetters, isWinner, isLoser]
    )

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetter(key)
        }

        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters])

        useEffect(() => {
            const handler = (e: KeyboardEvent) => {
                const key = e.key
                if (key !== "Enter") return

                e.preventDefault()
                setGuessedLetters([])
                setWordToGuess(getWord())
            }

            document.addEventListener("keypress", handler)

            return () => {
                document.removeEventListener("keypress", handler)
            }
        }, [])
    

    return (
        <div
            style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                margin: "0 auto",
                alignItems: "center",

            }}
        >
            <div style={{
                border: '1px solid crimson',
                background: 'white',
                color: 'orangered',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 30px',
                borderRadius: '10px',
                margin:'20px 0'
            }}>
                <h1>WordGuess</h1>
            </div>
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
                {isWinner && <div style={{
                    border: 'none',
                    background: 'green',
                    color: 'white',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 30px',
                    borderRadius: '10px'
                }} 
                >"Winner! - Press Enter Play again"</div>}
                {isLoser && <div style={{
                    border: 'none',
                    background: 'red',
                    color: 'white',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 30px',
                    borderRadius: '10px'
                }}>"Lost! - Press Enter Play again"</div>}
            </div>
            {/* {
                isLoser || isWinner ? <button onClick={PlayAgain}>Play Again</button> : null
            } */}

            <WordGuessWord reveal={isLoser} wordToGuess={wordToGuess} userId={userId} guessedLetters={guessedLetters} />

            <div style={{ alignSelf: "stretch" }}>
                <WordGuessKeyboard disabled={isWinner || isLoser}
                    activeLetters={guessedLetters.filter(letter =>
                        wordToGuess.includes(letter)
                    )}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter} />
            </div>
        </div>
    )
}

export default WordGuess