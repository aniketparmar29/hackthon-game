import React,{ useState } from "react";
import axios from "axios";

type WordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
  userId:number
}

export function WordGuessWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
  userId
}: WordProps) {
  const isWordGuessed = wordToGuess.split("").every((letter) =>
  guessedLetters.includes(letter)
  ); // check if all letters in the word have been guessed
  const [userPoints, setUserPoints] = useState(0);
  
  // give 50 points if the entire word is guessed
  const points = isWordGuessed ? 50 : 0;
  const getUserPoints = async () => {
    try {
      const response = await axios.get(`https://gaming-8lj4.onrender.com/user/${userId}`);
      setUserPoints(response.data.points);
    } catch (error) {
      // console.error(error);
    }
  };
  getUserPoints();
  const pointadded = async () => {
    try {
      const updatedPoints = parseInt(userPoints.toString()) + 50;
const response = await axios.patch(`https://gaming-8lj4.onrender.com/user/${userId}`, {
  points: updatedPoints.toString(),
});
setUserPoints(response.data.points);
    } catch (error) {
      console.error(error);
    }
  };
  if(isWordGuessed===true){
    pointadded();
  }
  return (
    <>
        <div>
          Points: {points}
        </div>
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
      >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "green",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
    </>
  )
}
