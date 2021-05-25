import styled from 'styled-components';

export const MainBanner = styled.div`
  height: 450px;
  margin: 25px -10px 0 -10px;
  display: flex;
  align-items: center;
  background: linear-gradient(-187deg, transparent 30%, #fad312 0), #fff;
  & * {
    outline: none;
    cursor: unset !important;
  }
  @media screen and (max-width: 800px) {
    height: 56vw;
  }
`;
export const MainBg = styled.img`
  max-width: 800px;
  max-height: 400px;
  margin: 0 auto;
  background: url('./photo/main-carousel-photo/IMG_2.JPG') no-repeat center
    center;
  background-size: 80% auto;
`;
