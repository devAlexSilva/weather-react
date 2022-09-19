import * as S from "./Styles";
import { propsSection } from "../../types";

export const Section = ({ img, alt }: propsSection) => {
  return (
    <>
      <S.Container about="container">
        <S.Background src={img} alt={alt}/>
        <S.Wrapper>
          <S.Search></S.Search>
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
