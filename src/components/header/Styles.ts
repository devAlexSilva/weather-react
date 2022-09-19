import styled from "styled-components";
import { TiWeatherPartlySunny } from "react-icons/ti";

export const Wrapper = styled.header`
  display: flex;
  position: absolute;
  z-index: 2;
  align-items: center;
  width: 100vw;
  height: 3rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.15);
`;
export const Logo = styled(TiWeatherPartlySunny)`
  height: 100%;
  width: auto;
  margin: 0 10px;
`;
export const Label = styled.div`
  font-variant: small-caps;
  font-size: 1.5rem;
`;
