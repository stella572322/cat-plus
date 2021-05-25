import React, { useRef, useState, useEffect } from 'react';
import { MainBanner, MainBg } from './style';
import Carousel from 'nuka-carousel';

export default function MainCarousel() {
  const keyArray = useRef(Array.from({ length: 8 }, (_, i) => i + 1));

  useEffect(() => {
    console.log(keyArray.current);
  }, []);

  return (
    <MainBanner>
      <Carousel
        width={'100%'}
        height={'100%'}
        autoplay={true}
        wrapAround={true}
        speed={300}
        pauseOnHover={false}
      >
        {keyArray.current.map((number) => {
          return (
            <MainBg
              key={number}
              src={`/photo/main-carousel-photo/IMG_${number}.JPG`}
            />
          );
        })}
      </Carousel>
    </MainBanner>
  );
}
