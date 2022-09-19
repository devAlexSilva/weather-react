import styled from "styled-components";

export const Container = styled.div`
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 3rem);
  position: relative;
`;

export const Background = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: calc(100vh + 3rem);
`;

export const Wrapper = styled.div`
  background-color: blue;
  height: 60%;
  width: 30%;
  max-width: 600px;
  min-width: 250px;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.01);
`;

export const SearchWrapper = styled.div``;
export const DataWrapper = styled.div``;
export const DataTemp = styled.div``;
export const Temp = styled.div``;
export const SvgWrapper = styled.sup``;
export const Svg = styled.div``;
