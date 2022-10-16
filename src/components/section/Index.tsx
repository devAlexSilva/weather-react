import * as S from "./Styles";
import { propsSection, responseApi } from "../../types";
import { Api } from "../../api/openWeather";
import { KeyboardEvent, useState } from "react";

export const Section = ({ img, alt }: propsSection) => {
  const api = new Api();
  const [textSearch, setTextSearch] = useState("");
  const [weather, setWeather] = useState({} as responseApi);

  const result = async (e: KeyboardEvent) => {
    if (e.key !== "Enter") return;

    const weather = await api.get(textSearch.trim());
    setTextSearch("");
    setWeather(weather);
  };

  const dateNow = (date: Date) => {
    let currentDate = date.toLocaleDateString();
    currentDate = currentDate.replace(/\//, " do ");
    currentDate = currentDate.replace(/\//, " de ");
    return currentDate;
  };

  return (
    <>
      <S.Container about="container">
        <S.Background src={img} alt={alt} />
        <S.Wrapper>
          <S.Search
            onKeyUp={(e) => result(e as KeyboardEvent)}
            onChange={(e) => setTextSearch(e.target.value)}
            value={textSearch}
            placeholder="exemplo: Natal"
          ></S.Search>
          {weather.name && (
            <S.DataWrapper>
              <p>
                {weather.name}, {weather.sys.country}
              </p>
              <p>{dateNow(new Date())}</p>
              <S.DataTemp about="dataTemp">
                <S.Temp>
                  <span>{weather.main.temp.toFixed(0)}°C</span>
                  <S.SvgWrapper about="wrapperImage">
                    <S.Svg
                      src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                    />
                  </S.SvgWrapper>
                </S.Temp>
                <S.Description>{weather.weather[0].description}</S.Description>
              </S.DataTemp>
            </S.DataWrapper>
          )}
          {weather.cod === "404" && (
            <S.DataWrapper>
              <S.DataTemp>{weather.message}</S.DataTemp>
            </S.DataWrapper>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
};
