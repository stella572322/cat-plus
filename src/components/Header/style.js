import styled from 'styled-components';

export const Wrapper = styled.div``;
export const NavbarWrapper = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;
export const Navbar = styled.nav`
  background: #fff;
  padding: 10px;
`;
export const NavBrand = styled.div`
  background: url('./photo/icon/cat_logo.svg') center/cover no-repeat;
  width: 123px;
  height: 45px;
  cursor: pointer;
}
`;
export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
`;
export const NavItem = styled.li`
  padding-right: 20px;
  width: 8vw;
  max-width: 80px;
  margin-right: 10px;
  cursor: pointer;
  list-style-type: none;
`;
export const NavFunction = styled.a`
  transition: background 0.5s ease-in-out;
  font-size: 15px;
  color: #666;
  &:hover { 
    border-bottom: 1px solid #ffc107;
    padding-bottom: 5px;
    color: #000000;
`;
export const NavbarMedia = styled.div`
  background: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
export const NavMediaBrand = styled.div`
  background: url('./photo/icon/cat_logo.svg') center/cover no-repeat;
  width: 123px;
  height: 45px;
  cursor: pointer;
`;

export const NavMediaForm = styled.div`
  background: url('./photo/icon/hamburger.svg') center/cover no-repeat;
  width: 1.5em;
  background-size: 100% 100%;
  cursor: pointer;
`;

export const NavMediaItems = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavMediaItem = styled.div`
  padding: 10px;
  cursor: pointer;
  list-style-type: none;
  margin: 0 auto;
`;
export const NavMediaFunction = styled.a`
  transition: background 0.5s ease-in-out;
  font-size: 15px;
  color: #666;
  &:hover { 
    border-bottom: 1px solid #ffc107;
    padding-bottom: 5px;
    color: #000000;
`;
