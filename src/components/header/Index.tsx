import * as S from "./Styles"
import { propsHeader } from "../../types"

export const Header = ({textLogo}: propsHeader) => {
    return(
        <>
            <S.Wrapper>
                <S.Logo />
                <S.Label onClick={() => window.location.reload()}>{textLogo}</S.Label>
            </S.Wrapper>
        </>
    )
}