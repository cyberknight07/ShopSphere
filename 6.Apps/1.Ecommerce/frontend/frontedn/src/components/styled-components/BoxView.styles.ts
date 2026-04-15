import styled from "styled-components";

type SpanProps = {
    color?: string,
    backgroundColor?:string,
    fontWeight?: number,
    size?: number,
    textAlign?: string
    flex?: number,
    padding?: string,
    alignItems?: string,
    justifyContent?: string
    borderRadius?: string
    flexWrap?: string
    cursor?: string,
    opacity?: string | number,
    position?: string
    right?: string | number,
    bottom?: string | number,
     

}

export const TextView = styled.span<SpanProps>`
    
    display: flex;
    flex: ${({flex = 'none'}) => flex};
    padding: ${({padding = '0px'}) => padding};
    justify-content: ${({justifyContent = 'normal'}) => justifyContent};
    align-items: ${({alignItems= 'normal'}) => alignItems};
    text-align: ${({textAlign = 'none'}) => textAlign};
    flex-wrap: ${({flexWrap = 'nowrap'}) => flexWrap};
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${({size = 24}) => `${size}px`};
    font-weight: ${({fontWeight = 400}) => fontWeight};
    border-color:  ${({backgroundColor = "none"}) => backgroundColor };
    border-radius: ${({borderRadius = '8px'}) => borderRadius};
    gap: 10px;
    color: ${({color = "#000"}) => color };
    background-color: ${({backgroundColor = "none"}) => backgroundColor };
    opacity: ${({opacity = 1}) => opacity};
    position: ${({position = 'static'}) => position};
    right: ${({right= '0px'}) => right};
    bottom: ${({bottom= '0px'}) => bottom};
    

    &:hover{
        cursor: ${({cursor = 'normal'}) => cursor};
        
    }

`