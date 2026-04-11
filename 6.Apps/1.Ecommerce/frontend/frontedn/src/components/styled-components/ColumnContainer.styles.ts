import styled from "styled-components";

type ColumnContainerProps = {
    flex?: number | string,
    padding?: string,
    margin?: string,
    position?: string,
    boxShadow?: string
}

export const ColumnContainer = styled.div<ColumnContainerProps>`
    display: flex;
    flex: ${({flex = 'none'}) => flex};
    padding: ${({padding = '0px'}) => padding};
    margin: ${({margin= '0px'}) => margin};
    flex-direction: column;
    justify-content: center;
    position: ${({position = 'static'}) => position};
    box-shadow: ${({boxShadow = '0px'}) => boxShadow};
`
