import * as S from "./Styles"
import { propsHeader } from "../../types"

export const Header = ({textLogo}: propsHeader) => {
    return(
        <>
            <S.Wrapper>
                <S.Logo />
                <S.Label>{textLogo}</S.Label>
            </S.Wrapper>
        </>
    )
}