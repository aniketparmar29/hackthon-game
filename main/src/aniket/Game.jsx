import React, { useState, useEffect } from 'react';
import shootingSound from './sounnd.mp3';
import axios from 'axios';




const Game = ({userId}) => {
  const [fruits, setFruits] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasGameEnded, setHasGameEnded] = useState(false);
  const [userPoints, setUserPoints] = useState(0);



  const getRandomFruit = () => {
    const fruits = ['🍎', '🍌', '🍇', '🍊', '🍉', '🍓'];
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
  };

  const addFruit = () => {
    const fruit = {
      id: Date.now(),
      emoji: getRandomFruit(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
    setFruits((fruits) => [...fruits, fruit]);
  };

  const removeFruit = (id) => {
    setFruits((fruits) => fruits.filter((fruit) => fruit.id !== id));
    setScore((score) => score + 1);
  };

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(addFruit, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (timeLeft > 0 && isPlaying) {
      const timeoutId = setTimeout(() => setTimeLeft((timeLeft) => timeLeft - 1), 1000);
      return () => clearTimeout(timeoutId);
    } else if (isPlaying) {
      setIsPlaying(false);
      setHasGameEnded(true);
    }
  }, [timeLeft, isPlaying]);

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
      const updatedPoints = parseInt(userPoints) + parseInt(score);
      const response = await axios.patch(`https://gaming-8lj4.onrender.com/user/${userId}`, {
        points: updatedPoints,
      });
      setUserPoints(response.data.points);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (hasGameEnded) {
      pointadded();
    }
  }, [hasGameEnded]);

  const handleShoot = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    fruits.forEach((fruit) => {
      if (Math.abs(fruit.x - x) < 50 && Math.abs(fruit.y - y) < 50) {
        const audio = new Audio(shootingSound);
        audio.play();
        removeFruit(fruit.id);
      }
    });
  };

  const handleStart = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(60);
    setFruits([]);
    setHasGameEnded(false);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center" onClick={handleShoot}>
  {isPlaying ? (
    <>
      <div className="text-4xl font-bold mb-4">Score: {score}</div>
      <div className="text-4xl font-bold mb-4">Time left: {timeLeft}</div>
    </>
  ) : (
    <button className="text-4xl font-bold mb-4 px-8 py-4 bg-blue-500 text-white rounded-lg" onClick={handleStart}>
      Start Game
    </button>
  )}
  {fruits.map((fruit) => (
    <div
      key={fruit.id}
      className="absolute z-10 text-4xl cursor-pointer"
      style={{ left: fruit.x, top: fruit.y }}
    >
      {fruit.emoji}
    </div>
  ))}
</div>
  );
};

export default Game;
