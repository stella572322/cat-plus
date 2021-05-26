import styled from 'styled-components';

/*ArticleTitle */
export const MainContent = styled.main`
  margin-bottom: 400px;
  background: #fff;
  padding-top: 50px;
  z-index: 10;
`;
export const Description = styled.section`
  text-align: center;
  margin: 0 auto;
`;
export const DescriptionTitle = styled.h1`
  display: inline-block;
  margin: 0 auto 60px auto;
  border-bottom: 4px solid #fad312;
  padding-bottom: 5px;
  color: #333;
  font-size: 22px;
  font-weight: 500;
`;
export const DescriptionIcon = styled.span`
  :before {
    background: url('./photo/icon/description.svg') center/cover no-repeat;
    content: '';
    width: 22px;
    height: 22px;
    display: inline-block;
    position: relative;
    top: 3px;
    right: 5px;
  }
`;
/*ArticleContent */
export const DescriptionBg = styled.div`
  background: #fff url('./photo/article-photo/cat_19.jpg') center/cover
    no-repeat;
  background-size: 100% auto;
  background-attachment: fixed;
  margin: 0 -8px 0 -8px;
`;
export const DescriptionInner = styled.section`
  margin: 0 auto;
  text-align: left;
  padding: 32px 216px;
`;
export const Heading = styled.div`
  height: 120px;
  position: relative;
  color: #fff;
  margin-bottom: 3rem;
`;
export const Slogan = styled.h2`
  max-width: 860px;
  margin: 0 auto;
  text-align: left;
  padding: 22px 0;
  font-size: 1.5em;
  margin-bottom: 0.5rem;
  line-height: 2;
  & .typed-cursor--display-none .typed-cursor {
    display: none;
  }
  & .typed-cursor--color-yellow .typed-cursor {
    color: #fad312;
  }
`;
export const SloganCursor = styled.span`
  color: #fad312;
  opacity: 1;
  ::after {
    position: absolute;
    top: 65px;
    left: 0;
    width: 170px;
    height: 10px;
    content: '';
    display: block;
    background: #fbdc44;
    z-index: 1;
  }
`;
export const Summary = styled.p`
  color: #fff;
  font-size: 15px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.6), 1px 1px 0 rgba(0, 0, 0, 0.8);
  line-height: 1.7rem;
  letter-spacing: 0.14em;
  margin-top: 0;
  margin-bottom: 1rem;
`;
export const Focus = styled.span`
  color: #fad312;
`;
