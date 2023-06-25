import React from 'react';
import quotes from '../images/pattern-quotes.svg';
import patternBg from '../images/pattern-bg.svg';
import leftArrow from '../images/icon-prev.svg';
import rightArrow from '../images/icon-next.svg';

interface CardSliderProps {
  text: string;
  name: string;
  job: string;
  img: string;
  nextSlide: () => void;
  backSlide: () => void;
}

const CardSlider: React.FC<CardSliderProps> = ({
  text,
  name,
  job,
  img,
  nextSlide,
  backSlide,
}) => {
  return (
    <>
      <div className='mb-12 relative grid place-items-center'>
        <img
          src={img}
          alt={`photo of ${name}`}
          className='w-3/4 shadow-[5px_15px_40px_rgba(0,0,0,0.15)]'
        />
        <img
          src={patternBg}
          alt='background image'
          className='absolute -z-10 w-full '
        />
        <div className='absolute bottom-0 translate-y-1/2 drop-shadow-lg'>
          <button
            onClick={backSlide}
            className=' px-3.5 py-2.5 rounded-l-3xl bg-white cursor-pointer '
          >
            <img
              src={leftArrow}
              alt='left arrow'
              className='object-cover w-full'
            />
          </button>
          <button
            onClick={nextSlide}
            className=' p-3.5 py-2.5 rounded-r-3xl  bg-white cursor-pointer '
          >
            <img
              src={rightArrow}
              alt='right arrow'
              className='object-cover w-full'
            />
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center text-center items-center gap-6 relative '>
        <img
          src={quotes}
          alt='quotes'
          aria-hidden='true'
          className='absolute -top-5 w-1/6'
        />
        <q className='text-lg font-light text-colorDarkBlue'>{text}</q>
        <div className='flex flex-col '>
          <p className='text-colorDarkBlue font-bold'>{name}</p>
          <p className='text-colorGrayBlue'>{job}</p>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
