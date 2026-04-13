import styled from "styled-components";

type ImageProps = {
    width?: string,
    height?: string,
    padding?: string,
    borderRadius?: string,
    flex?: number| string
}

export const Image = styled.img<ImageProps>`
    display: flex;
    flex: ${({flex= 'none'}) => flex};
    width: ${({width = 'auto'}) => width};
    height: ${({height = 'auto'}) => height};
    padding: ${({padding = '0px'}) => padding};
    border-radius: ${({borderRadius= '0px'}) => borderRadius};

`