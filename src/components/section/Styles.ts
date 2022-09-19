import styled from "styled-components";

export const Container = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  width: 30%;
  max-width: 600px;
  min-width: 250px;
  border-radius: 25px;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.01);
`;

export const Search = styled.input`
  background-color: rgba(255, 255, 255, .3);
  height: 18%;
  width: 85%;
  padding: 8px 18px;
  margin: 15px 0;
  outline: none;
  border: none;
  border-radius: 25px;
  font-size: 18px;
`;
export const DataWrapper = styled.div`
  background-color: yellow;
  height: 100%;
  width: 85%;
  border-radius: 25px;
`;
export const DataTemp = styled.div``;

export const Temp = styled.p`
  font-size: 20px;
`;
export const SvgWrapper = styled.sup`
  text-transform: uppercase;
`;
export const Svg = styled.div``;
