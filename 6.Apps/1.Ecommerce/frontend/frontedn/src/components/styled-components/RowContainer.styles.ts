import styled from "styled-components";

type RowContainerProps = {
    overflowX?: string
    alignItems?: string
    flexWrap?: string
    padding?: string
}

export const RowContainer = styled.div<RowContainerProps>`
    display: flex;
    padding: ${({padding = '0px'}) => padding};
    flex-wrap: ${({flexWrap = 'nowrap'}) => flexWrap};
    align-items: ${({alignItems = 'center'}) => alignItems};
    justify-content: space-between;
    gap: 10px;
    overflow-x: ${({overflowX = 'hidden'}) => overflowX};
`