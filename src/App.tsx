import React, { useState } from 'react';
import { data } from './data';
import CardSlider from './components/CardSlider';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  type SlideFunc = () => void;

  const nextSlide: SlideFunc = () => {
    console.log('Next');
  };

  const backSlide: SlideFunc = () => {
    console.log('Back');
  };

  return (
    <main className="font-Inter max-w-full min-h-screen bg-[url('./images/pattern-curve.svg')] bg-contain bg-no-repeat bg-bottom grid place-items-center">
      <div className='mx-7 flex flex-col gap-10 relative '>
        {data.map((item) => {
          return <CardSlider {...item} key={item.id} />;
        })}
      </div>
    </main>
  );
};

export default App;

//bg-[left_calc(0%)_bottom_calc(-25%)]
