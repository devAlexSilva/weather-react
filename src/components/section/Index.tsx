import * as S from "./Styles";
import { propsSection } from "../../types";
import { Api, res } from "../../api/openWeather";
import { useState } from "react";

export const Section = ({ img, alt }: propsSection) => {
  const api = new Api()
  const [textSearch, setTextSearch] = useState('')

  const result = async(e: KeyboardEvent) => {
    e.key === "Enter" && (
    console.log(await api.get(textSearch)),
    setTextSearch('')
    )
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
