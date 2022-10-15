import * as S from "./Styles";
import { propsSection } from "../../types";
import { Api, res } from "../../api/openWeather";
import { useState } from "react";

export const Section = ({ img, alt }: propsSection) => {
  const api = new Api()
  const [textSearch, setTextSearch] = useState('')
  const [wheater, setWeather] = useState({})

  const result = async(e: KeyboardEvent) => {
    if(e.key !== "Enter") return;
    
    const wheater = await api.get(textSearch)
    setTextSearch('')
    setWeather(wheater)
    console.log(wheater)    
  }

  const dateNow = (date: Date) => {
    let currentDate = date.toLocaleDateString()
    currentDate = currentDate.replace(/\//, " do ")
    currentDate = currentDate.replace(/\//, " de ")
    return currentDate
  }

  return (
    <>
      <S.Container about="container">
        <S.Background src={img} alt={alt}/>
        <S.Wrapper>
          <S.Search 
          onKeyUp={e => result(e)} 
          onChange={e => setTextSearch(e.target.value)}
          value={textSearch}
          ></S.Search>
            {wheater.name &&
          <S.DataWrapper>
            <h3>{wheater.name}, {wheater.sys.country}</h3>
              <p>{dateNow(new Date())}</p>
            <S.DataTemp>
              <p>{wheater.main.temp}°C</p>
              <S.Temp />
              <S.SvgWrapper>
                <S.Svg />
              </S.SvgWrapper>
            </S.DataTemp>
          </S.DataWrapper>
            }
        </S.Wrapper>
      </S.Container>
    </>
  );
};
