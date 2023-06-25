import React, { useState } from 'react';
import { data } from './data';
import CardSlider from './components/CardSlider';

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
    <main className="font-Inter max-w-full min-h-screen bg-[url('./images/pattern-curve.svg')] bg-contain bg-no-repeat bg-bottom grid place-items-center">
      <div className='mx-7 flex flex-col gap-10 relative '>
        <CardSlider
          {...data[currentSlideIndex]}
          key={data[currentSlideIndex].id}
          nextSlide={nextSlide}
          backSlide={backSlide}
        />
        ;
      </div>
    </main>
  );
};

export default App;

//bg-[left_calc(0%)_bottom_calc(-25%)]
