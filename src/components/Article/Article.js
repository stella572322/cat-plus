import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';
import {
  MainContent,
  Description,
  DescriptionTitle,
  DescriptionIcon,
  DescriptionBg,
  DescriptionInner,
  Heading,
  Slogan,
  SloganCursor,
  Summary,
  Focus,
} from './style';

export default function Article() {
  return (
    <MainContent>
      <Description>
        <DescriptionTitle>
          <DescriptionIcon>關於我們</DescriptionIcon>
        </DescriptionTitle>
        <DescriptionBg>
          <DescriptionInner>
            <Heading>
              <Slogan>
                <div>
                  <Typed
                    className={'typed-cursor--display-none'}
                    strings={['你知道嗎？你知道嗎？你知道嗎']}
                    typeSpeed={110}
                    backSpeed={120}
                    loop
                  />
                  <br />

                  <Typed
                    className={'typed-cursor--display-none'}
                    strings={[`>            最安心的家`]}
                    typeSpeed={110}
                    backSpeed={120}
                    loop
                  />
                  <br />
                  <Typed
                    className={'typed-cursor--color-yellow'}
                    strings={['']}
                  />
                </div>
              </Slogan>
              <SloganCursor></SloganCursor>
            </Heading>
            <Summary>
              有拖延症的人很奇怪，不是所有的事都拖，
              <Focus>只有重要的事才拖。</Focus>並不是動作慢，
              反而大部分時間手腳還挺快的。偏偏就是那些最需要慢條斯理、按部就班的大計畫，才會拖泥帶水。
              這是為什麼？
              <br />
              <br />
              我們都<Focus>不需要戰勝拖延症，而是與之好好相處，</Focus>
              就如同我們的恐懼與黑暗面也是。
              只要理解背後對你的意義，與其「空性」，所有一切本身都是無害的。
              而且有時候（是有時候喔……）適時的小拖延，也不外乎是激發創造力與醞釀靈感的方法。
              願各位與拖延症有更好的相處。
            </Summary>
          </DescriptionInner>
        </DescriptionBg>
      </Description>
    </MainContent>
  );
}
