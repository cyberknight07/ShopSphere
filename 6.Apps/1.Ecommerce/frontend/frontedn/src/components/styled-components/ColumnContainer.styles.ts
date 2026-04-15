import styled from "styled-components";

type ColumnContainerProps = {
    flex?: number | string,
    padding?: string,
    margin?: string,
    position?: string,
    boxShadow?: string,
    alignItems?: string,
    top?: string | number // Need to ask
}

export const ColumnContainer = styled.div<ColumnContainerProps>`
    display: flex;
    flex: ${({flex = 'none'}) => flex};
    padding: ${({padding = '0px'}) => padding};
    margin: ${({margin= '0px'}) => margin};
    flex-direction: column;
    align-items: ${({alignItems = 'normal'}) => alignItems};
    justify-content: center;
    position: ${({position = 'static'}) => position};
    top: ${({top = 'none'}) => top};
    text-decoration: wavy;
    
    &:hover{
        box-shadow: ${({boxShadow = '0px'}) => boxShadow};
    }
`
