import styled from "styled-components"

type headerProps = {
    height? : number
    active?: boolean
}

export const Header = styled.header<headerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({height = "60px"}) => height} ;

`


