import React, { useState } from 'react';
import { data } from './data';
import CardSlider from './components/CardSlider';
import curveBg from './images/pattern-curve.svg';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  type SlideFunc = () => void;

  const nextSlide: SlideFunc = () => {
    const newSlideIndex =
      currentSlideIndex === data.length - 1 ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(newSlideIndex);
  };

  const backSlide: SlideFunc = () => {
    const newSlideIndex =
      currentSlideIndex === 0 ? data.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(newSlideIndex);
  };

  return (
    <main className='font-Inter max-w-full min-h-screen grid place-items-center'>
      <div className='mx-7 max-w-6xl flex flex-col gap-10 relative tabletmd:gap-16 tabletmd:px-5 tabletlg:grid tabletlg:grid-cols-2 tabletlg:grid-rows-1 tabletlg:gap-0'>
        <CardSlider
          {...data[currentSlideIndex]}
          key={data[currentSlideIndex].id}
          nextSlide={nextSlide}
          backSlide={backSlide}
        />
      </div>
      <img
        src={curveBg}
        alt='background curve'
        className='absolute bottom-0 left-0 -z-10'
        aria-hidden='true'
      />
    </main>
  );
};

export default App;
