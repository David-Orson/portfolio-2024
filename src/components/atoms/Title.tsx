// npm
import React from "react";
import styled from "styled-components";

// theme
import theme from "../../theme";

// hooks
import { useWindowSize } from "../../hooks/ui/useWindowSize";

type TitleProps = {
    children: React.ReactNode;
    h?: number;
    color?: string;
    userSelect?: "none" | "auto";
};

export const Title = ({
    children,
    h,
    color,
    userSelect = "none",
}: TitleProps) => {
    // hooks
    const w = useWindowSize();

    // methods
    const renderTitle = (h: number) => {
        switch (h) {
            case 1:
                return (
                    <StyledH1
                        size={w}
                        color={color ? color : ""}
                        userSelect={userSelect}
                    >
                        {children}
                    </StyledH1>
                );
            case 2:
                return (
                    <StyledH2
                        size={w}
                        color={color ? color : ""}
                        userSelect={userSelect}
                    >
                        {children}
                    </StyledH2>
                );
            case 3:
                return (
                    <StyledH3
                        size={w}
                        color={color ? color : ""}
                        userSelect={userSelect}
                    >
                        {children}
                    </StyledH3>
                );
            case 4:
                return (
                    <StyledH4
                        size={w}
                        color={color ? color : ""}
                        userSelect={userSelect}
                    >
                        {children}
                    </StyledH4>
                );
            case 5:
                return (
                    <StyledH5
                        size={w}
                        color={color ? color : ""}
                        userSelect={userSelect}
                    >
                        {children}
                    </StyledH5>
                );
            default:
                return (
                    <StyledH1
                        size={w}
                        color={color ? color : ""}
                        userSelect={userSelect}
                    >
                        {children}
                    </StyledH1>
                );
        }
    };

    return <>{renderTitle(h || 1)}</>;
};

type StyledTitleProps = {
    size: number;
    color: string;
    userSelect: "none" | "auto";
};

const StyledH1 = styled.h1<StyledTitleProps>`
    max-width: 80%;
    color: ${({ color }) => (color ? color : theme.color.boldText)};
    font: ${({ size }) => theme.font(size).h1(700)};
    text-align: center;
    user-select: ${({ userSelect }) => userSelect};
`;

const StyledH2 = styled.h2<StyledTitleProps>`
    max-width: 80%;
    color: ${theme.color.text};
    font: ${({ size }) => theme.font(size).h2(700)};
    text-align: center;
    user-select: ${({ userSelect }) => userSelect};
`;

const StyledH3 = styled.h3<StyledTitleProps>`
    max-width: 80%;
    color: ${theme.color.text};
    font: ${({ size }) => theme.font(size).h3(700)};
    text-align: center;
    user-select: ${({ userSelect }) => userSelect};
`;

const StyledH4 = styled.h4<StyledTitleProps>`
    max-width: 100%;
    color: transparent;
    background: -webkit-linear-gradient(
        180deg,
        hsl(173, 80%, 40%),
        hsl(230, 77%, 49%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font: ${({ size }) => theme.font(size).h4(700)};
    text-align: center;
    user-select: ${({ userSelect }) => userSelect};
    z-index: 3;
`;

const StyledH5 = styled.h5<StyledTitleProps>`
    max-width: 80%;
    color: ${theme.color.text};
    font: ${({ size }) => theme.font(size).h5(700)};
    text-align: center;
    user-select: ${({ userSelect }) => userSelect};
`;

export default Title;
