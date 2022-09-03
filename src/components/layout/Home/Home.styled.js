import styled, { keyframes } from "styled-components";
import logo from '../../../assets/icons/logo.svg';
import MoonIcon from '../../../assets/icons/moon.png';
import SunIcon from '../../../assets/icons/sun.png';

export const StyledHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`;

const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "logo"
})`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${LogoSpin} infinite 20s linear;
  }
`;

export const ThemeIcon = styled.img.attrs(({ themeId }) => {
  const icon = themeId === 'light' ? {
    img: MoonIcon,
    name: 'moon'
  } : {
    img: SunIcon,
    name: 'sun'
  };

  return {
    src: icon.img,
    alt: icon.name + ' icon'
  }
})`
  height: 20px;
  vertical-align: bottom;
  margin-left: 5px;
`;