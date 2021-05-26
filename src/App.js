import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import Article from './components/Article';

const Main = styled.div`
  min-height: 100vh;
  background: #fff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
`;

export default function App() {
  return (
    <>
      <Main>
        <Header />
        <MainCarousel />
        <Article />
      </Main>
    </>
  );
}
