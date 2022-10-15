import styled from "styled-components";
import { FiSun } from "react-icons/fi";

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

  @media only screen and (max-height: 450px){
    display: none;
  }
`;
export const Logo = styled(FiSun)`
  height: 80%;
  color:rgba(255, 255, 0, 0.7);
  width: auto;
  margin: 0 10px;

  animation: sun infinite 20s linear;
  @keyframes sun {
    from {
transform: rotate(0deg);
    }
    to {
transform: rotate(360deg);
    }
  }
`;
export const Label = styled.div`
  font-variant: small-caps;
  font-size: 1.5rem;
  border-bottom: 1px solid #000;
  cursor: pointer;
`;
