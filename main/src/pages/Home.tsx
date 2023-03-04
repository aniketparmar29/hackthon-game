import React from 'react'
import Navbar from '../Components/Navbar'
import GameCard from './GameCard';
function Home() {
  const games = [
    {
      imageSrc: "https://i.ibb.co/thcj7g9/shoot.png",
      name: "Shoot The Fruits",
      link: "/shoot",
      pointsToEarn: "Infinite",
    },
    {
      imageSrc: "https://i.ibb.co/kB1ZxMG/wordguess.png",
      name: "Word Guess",
      link: "/wordguess",
      pointsToEarn: "50 per Guess",
    },
    {
      imageSrc: "https://i.ibb.co/Pmh6nLx/snake.png",
      name: "Snake",
      link: "/snake",
      pointsToEarn: "Unlimited",
    },
  ];
  return (
    <div>
      <Navbar/>
      <div className='lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 grid'>
      {games.map((game, index) => (
        <GameCard
        key={index}
        img={game.imageSrc}
        name={game.name}
        link={game.link}
        pointsToEarn={game.pointsToEarn}
        />
        ))}
        </div>
    </div>
  )
}

export default Home