import styled from "styled-components";

type RowContainerProps = {
    overflowX?: string,
    alignItems?: string,
    flexWrap?: string,
    padding?: string,
    justifyContent?: string,
    flex?: number | string,
    background?: string,
    borderRadius?: string
}

export const RowContainer = styled.div<RowContainerProps>`
    display: flex;
    background-color: ${({background = 'none'}) => background};
    flex: ${({flex = 'none'}) => flex};
    padding: ${({padding = '0px'}) => padding};
    flex-wrap: ${({flexWrap = 'nowrap'}) => flexWrap};
    align-items: ${({alignItems = 'center'}) => alignItems};
    justify-content:${({justifyContent = 'space-between'}) => justifyContent};
    gap: 10px;
    overflow-x: ${({overflowX = 'hidden'}) => overflowX};
    scroll-behavior: 'smooth';
    border-radius: ${({borderRadius = '0px'}) => borderRadius};
`