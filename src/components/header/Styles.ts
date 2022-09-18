import styled from "styled-components";
import { TiWeatherPartlySunny } from "react-icons/ti"

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    height: 3rem;
    background-color: red;
`
export const Logo = styled(TiWeatherPartlySunny)`
    height: 100%;
    width: auto;
    margin: 0 5px;
`
export const Label = styled.div`
    font-variant: small-caps;
    font-size: 1.5rem;
`