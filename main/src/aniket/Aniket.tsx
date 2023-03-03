import React, { useRef, useEffect, useState } from 'react';
import { createPopper } from '@popperjs/core';
import fram1 from './frame1.png'
import fram2 from './frame2.png'
import fram3 from './frame3.png'
import fram4 from './frame4.png'
import fram5 from './frame5.png'
function Aniket() {




  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [player, setPlayer] = useState({
    x: 50,
    y: 200,
    speed: 5,
    direction: 'right',
    frame: 0,
    frames: [fram1, fram2, fram3,fram4,fram5]
  });


  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = 1345;
    canvas.height = 615;

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw pitch lines
    ctx.fillStyle = '#DCC381';
    ctx.fillRect(570, 50, 330, 500); // Pitch
    ctx.fillStyle = 'black';
    ctx.fillRect(570, 80, 330, 9); // Bowling crease
    ctx.fillRect(570, 510, 330, 8);
    ctx.fillRect(750, 42, 8, 24); // Stumps
    ctx.fillRect(740, 42, 8, 24);
    ctx.fillRect(730, 42, 8, 24);
    ctx.fillRect(750, 530, 8, 24); // Stumps
    ctx.fillRect(740, 530, 8, 24);
    ctx.fillRect(730, 530, 8, 24);

    // Add tooltip for stumps
    const tooltipRef = document.createElement('div');
    tooltipRef.classList.add('bg-white', 'text-black', 'p-2', 'rounded-md');
    tooltipRef.innerHTML = 'Stumps';

    createPopper(canvas, canvas.children[1] as HTMLElement, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            padding: 8,
          },
        },
      ],
    });

    // Add event listener for key presses
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    const { x, y, speed, direction, frame, frames } = player;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Move the player based on key press
    switch (key) {
      case 'a':
        setPlayer({ ...player, y: y - speed, frame: (frame) % frames.length });
        break;
        case 'w':
          setPlayer({ ...player, y: y - speed, frame: (frame + 1) % frames.length });
          break;
          case 's':
            setPlayer({ ...player, y: y + speed, frame: (frame + 2) % frames.length });
            break;
            case 'e':
              setPlayer({ ...player, x: x + speed, frame: (frame + 3) % frames.length });
              break;
      case 'd':
        setPlayer({ ...player, x: x + speed, frame: (frame + 4) % frames.length });
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      <img
        src={player.frames[player.frame]}
        alt="Player"
        style={{ position: 'absolute', top: player.y, left: player.x }}
  />
</div>
  )}

  export default Aniket;
