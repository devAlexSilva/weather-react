import * as S from "./Styles";
import { propsSection } from "../../types";
import { Api, res } from "../../api/openWeather";
import { useState } from "react";

export const Section = ({ img, alt }: propsSection) => {
  const api = new Api()
  const [textSearch, setTextSearch] = useState('')
  const [wheater, setWeather] = useState({})

  const result = async(e: KeyboardEvent) => {
    e.key === "Enter" && (
    console.log(await api.get(textSearch)),
    setTextSearch('')
    )
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
          <S.DataWrapper>
              <h3>{dateNow(new Date())}</h3>
            <S.DataTemp>
              <S.Temp />
              <S.SvgWrapper>
                <S.Svg />
              </S.SvgWrapper>
            </S.DataTemp>
          </S.DataWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
