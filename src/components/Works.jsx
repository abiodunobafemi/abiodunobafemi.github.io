import React from 'react';
import code from '../assets/code2.png';
import covidImg from '../assets/covid19.jpg';
import snakeGameImg from '../assets/snakegame.jpg';
import ticTacToeImg from '../assets/Tic_tac_toe.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* COVID-19, The Public Sentiment */}
          <div
            style={{ backgroundImage: `url(${covidImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                COVID-19, The Public Sentiment
              </span>
              <p className='text-center'>Analysis of public sentiment during the COVID-19 pandemic</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/abiodunobafemi/Vader/blob/main/Vader-Project1.py'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Snake Game */}
          <div
            style={{ backgroundImage: `url(${snakeGameImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Snake Game
              </span>
              <p className='text-center'>Classic Snake game implemented in Python</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/abiodunobafemi/SnakeGame/blob/main/SnakeGame.py'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Tic-Tac-Toe */}
          <div
            style={{ backgroundImage: `url(${ticTacToeImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Tic-Tac-Toe
              </span>
              <p className='text-center'>Classic Tic-Tac-Toe game implemented in Python</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/abiodunobafemi/Tic-Tac-Toe'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
