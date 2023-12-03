// npm
import React from "react";
import styled from "styled-components";

// theme
import theme from "../../theme";

type TextProps = {
    children: React.ReactNode;
};

export const Text = ({ children }: TextProps) => {
    return <StyledText>{children}</StyledText>;
};

const StyledText = styled.div`
    color: ${theme.color.text};
    font: ${theme.font().md(400)};
`;
