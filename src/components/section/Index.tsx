import * as S from "./Styles";
import { propsSection } from "../../types";
import { Api, res } from "../../api/openWeather";
import { useState } from "react";

export const Section = ({ img, alt }: propsSection) => {
  const api = new Api()
  const [textSearch, setTextSearch] = useState('')
  const [weather, setWeather] = useState({})

  const result = async(e: KeyboardEvent) => {
    if(e.key !== "Enter") return;
    
    const weather = await api.get(textSearch)
    setTextSearch('')
    setWeather(weather)
    console.log(weather)    
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
            {weather.name &&
          <S.DataWrapper>
            <p>{weather.name}, {weather.sys.country}</p>
              <p>{dateNow(new Date())}</p>
            <S.DataTemp>
              <p>{weather.main.temp}°C</p>
              <p>{weather.weather[0].main}</p>
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
