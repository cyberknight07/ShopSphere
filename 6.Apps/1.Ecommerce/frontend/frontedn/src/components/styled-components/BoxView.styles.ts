import styled from "styled-components";

type SpanProps = {
    color?: string,
    backgroundColor?:string,
    fontWeight?: number,
    size?: number,
    textAlign?: string
    flex?: number
    padding?: string
}

export const TextView = styled.span<SpanProps>`
    display: flex;
    flex: ${({flex = 'none'}) => flex};
     /* padding = {'4px 8px'} */
    padding: ${({padding = '0px'}) => padding};
    text-align: ${({textAlign = 'none'}) => textAlign};
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${({size = 24}) => `${size}px`};
    font-weight: ${({fontWeight = 400}) => fontWeight};
    border-color:  ${({backgroundColor = "none"}) => backgroundColor };
    border-radius: 12px;
    color: ${({color = "#000"}) => color };
    background-color: ${({backgroundColor = "none"}) => backgroundColor };
`