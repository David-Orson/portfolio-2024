// npm
import React from "react";
import styled, { css } from "styled-components";

// theme
import theme from "../../theme";

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
};

export const Button = ({ onClick, children, size = "md" }: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} size={size}>
            {children}
        </StyledButton>
    );
};

type StyledButtonProps = {
    size?: "sm" | "md" | "lg";
};

const StyledButton = styled.button<StyledButtonProps>`
    position: relative;
    background: ${theme.gradient.secondary(100)};
    color: ${theme.color.boldText};
    padding: ${theme.spacing[8]} ${theme.spacing[32]};
    border-radius: ${theme.radius.sm};
    border: none;
    cursor: pointer;
    font: ${theme.font()["2xl"](700)};
    user-select: none;

    &:hover {
        background: ${theme.gradient.secondary(90)};
    }

    ${(props) =>
        props.size === "sm"
            ? css`
                  min-width: 100px;
              `
            : null}
    ${(props) =>
        props.size === "md"
            ? css`
                  min-width: 200px;
              `
            : null}
    ${(props) =>
        props.size === "lg"
            ? css`
                  min-width: 300px;
              `
            : null}
`;

export default Button;
