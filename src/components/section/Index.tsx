import * as S from "./Styles";
import { propsSection } from "../../types";
import { Api, res } from "../../api/openWeather";
import { KeyboardEvent, useState } from "react";

type dataWeather = {
  name: string,
  main: {temp: number},
  sys: {country: string},
  weather: [{main: string}],
  cod: string,
  message: string
}

export const Section = ({ img, alt }: propsSection) => {
  const api = new Api()
  const [textSearch, setTextSearch] = useState('')
  const [weather, setWeather] = useState({} as dataWeather)

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
          onKeyUp={e => result(e as KeyboardEvent)} 
          onChange={e => setTextSearch(e.target.value)}
          value={textSearch}
          placeholder="exemplo: Natal"
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
            {weather.cod === '404' &&
            <S.DataWrapper>
              <S.DataTemp>{weather.message}</S.DataTemp>
            </S.DataWrapper>
              
            }
        </S.Wrapper>
      </S.Container>
    </>
  );
};
