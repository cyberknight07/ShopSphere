import styled from "styled-components";
import { colors } from "../../utililty/themeColor";

type SpanProps = {
  color?: string;
  backgroundColor?: string;
  fontWeight?: number;
  size?: number;
  textAlign?: string;
  flex?: number;
  padding?: string;
  alignItems?: string;
  justifyContent?: string;
  borderRadius?: string;
  flexWrap?: string;
  cursor?: string;
  opacity?: string | number;
  position?: string;
  right?: string | number;
  bottom?: string | number;

  // ✅ NEW (important)
  isActive?: boolean;
  isDisabled?: boolean;
  variant?: "pagination" | "default";
};

export const TextView = styled.span<SpanProps>`
  display: flex;
  flex: ${({ flex = "none" }) => flex};
  padding: ${({ padding = "0px" }) => padding};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  text-align: ${({ textAlign = "center" }) => textAlign};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};

  font-size: ${({ size = 16 }) => `${size}px`};
  font-weight: ${({ fontWeight = 500 }) => fontWeight};

  border-radius: ${({ borderRadius = "8px" }) => borderRadius};
  color: ${({ color = "#000" }) => color};
  background-color: ${({ backgroundColor = "transparent" }) =>
    backgroundColor};

  opacity: ${({ isDisabled, opacity = 1 }) =>
    isDisabled ? 0.4 : opacity};

  position: ${({ position = "static" }) => position};
  right: ${({ right = "0px" }) => right};
  bottom: ${({ bottom = "0px" }) => bottom};

  transition: all 0.2s ease;

  /* ✅ PAGINATION VARIANT */
  ${({ variant, isActive }) =>
    variant === "pagination" &&
    `
      width: 44px;
      height: 44px;
      cursor: ${isActive ? "default" : "pointer"};
      background-color: ${
        isActive ? colors.primary.base : colors.neutral.shades[7]
      };
      color: ${isActive ? "#fff" : "#333"};
      font-weight: ${isActive ? 700 : 500};
  `}

  /* ✅ HOVER EFFECT */
  &:hover {
    ${({ variant, isActive, isDisabled}) =>
      variant === "pagination" &&
      !isActive &&
      !isDisabled &&
      `
        background-color: ${colors.neutral.shades[6]};
        transform: translateY(-1px);
      `}
  }

  /* ✅ DISABLED */
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
`;