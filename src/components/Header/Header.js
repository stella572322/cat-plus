import React, { useState, useEffect } from 'react';
import useMedia from '../../hooks/useMedia';
import {
  Wrapper,
  NavbarWrapper,
  Navbar,
  NavBrand,
  NavItems,
  NavItem,
  NavFunction,
  NavbarMedia,
  NavMediaBrand,
  NavMediaForm,
  NavMediaItems,
  NavMediaItem,
  NavMediaFunction,
} from './style';

export default function Header() {
  const media = useMedia();

  return (
    <Wrapper>
      {media === 'phone' && (
        <>
          <NavbarMedia>
            <NavMediaBrand></NavMediaBrand>
            <NavMediaForm></NavMediaForm>
          </NavbarMedia>
          <NavMediaItems>
            <NavMediaItem>
              <NavMediaFunction>關於我們</NavMediaFunction>
            </NavMediaItem>
            <NavMediaItem>
              <NavMediaFunction>住宿環境</NavMediaFunction>
            </NavMediaItem>
            <NavMediaItem>
              <NavMediaFunction>收費說明</NavMediaFunction>
            </NavMediaItem>
            <NavMediaItem>
              <NavMediaFunction>服務項目</NavMediaFunction>
            </NavMediaItem>
            <NavMediaItem>
              <NavMediaFunction>認識主子</NavMediaFunction>
            </NavMediaItem>
            <NavMediaItem>
              <NavMediaFunction>預約住宿</NavMediaFunction>
            </NavMediaItem>
          </NavMediaItems>
        </>
      )}
      {media === 'desktop' && (
        <NavbarWrapper>
          <Navbar>
            <NavBrand></NavBrand>
          </Navbar>
          <NavItems>
            <NavItem>
              <NavFunction>關於我們</NavFunction>
            </NavItem>
            <NavItem>
              <NavFunction>住宿環境</NavFunction>
            </NavItem>
            <NavItem>
              <NavFunction>收費說明</NavFunction>
            </NavItem>
            <NavItem>
              <NavFunction>服務項目</NavFunction>
            </NavItem>
            <NavItem>
              <NavFunction>認識主子</NavFunction>
            </NavItem>
            <NavItem>
              <NavFunction>預約住宿</NavFunction>
            </NavItem>
          </NavItems>
        </NavbarWrapper>
      )}
    </Wrapper>
  );
}
