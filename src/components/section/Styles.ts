import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
export const Background = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: calc(100vh + 3rem);
`;
export const Wrapper = styled.section`
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

  @media only screen and (max-height: 450px){
    height: 100%;
    justify-content: flex-end;
    z-index: 3;
  } 
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
  font-size: 1.125rem;
`;
export const DataWrapper = styled.article`
  text-align: center;
  height: 100%;
  width: 85%;
  border-radius: 25px;

  > p:nth-child(1) {
    font-size: 1.25rem;
    letter-spacing: 1.6px;
    font-weight: 600;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  
  > p:nth-child(2) {
    text-transform: capitalize;
    font-family: Georgia;
  }
  `;
export const DataTemp = styled.div`
  font-size: 2rem;
  font-weight: 900;
  margin: 50px auto;
  height: 35%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Temp = styled.div`
  margin-bottom: 10px;
`;
export const Description = styled.p`
  font-size: 1.25rem;
`;
export const SvgWrapper = styled.sup`
  text-transform: uppercase;
`;
export const Svg = styled.img``;
