// npm
import React from "react";
import styled from "styled-components";

// theme
import theme from "../../theme";

type TextProps = {
    children: React.ReactNode;
    bold?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
    userSelect?: "none" | "auto";
};

export const Text = ({
    children,
    bold,
    size = "lg",
    weight = 500,
    userSelect = "none",
}: TextProps) => {
    return (
        <StyledText
            $bold={bold ? 1 : 0}
            size={size}
            weight={weight}
            userSelect={userSelect}
        >
            {children}
        </StyledText>
    );
};

type StyledTextProps = {
    $bold?: number;
    size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    weight: 300 | 400 | 500 | 600 | 700 | 800 | 900;
    userSelect: "none" | "auto";
};

const StyledText = styled.div<StyledTextProps>`
    color: ${({ $bold }) => ($bold ? theme.color.boldText : theme.color.text)};
    font: ${({ size, weight }) => theme.font()[size](weight)};
    line-height: 1.4;
    user-select: ${({ userSelect }) => userSelect};
`;
