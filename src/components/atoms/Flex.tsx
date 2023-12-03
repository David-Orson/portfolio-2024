// npm
import styled, { css } from "styled-components";

// theme
import { Gap } from "../../theme/spacing";

type Justify =
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
type Align = "center" | "flex-start" | "flex-end" | "baseline" | "stretch";

type FlexProps = {
    children: React.ReactNode;
    col?: boolean;
    wrap?: boolean;
    wfull?: boolean;
    maxWidth?: string;
    minheight?: string;
    justify?: Justify;
    align?: Align;
    bg?: string;
    gap?: Gap;
};

export const Flex = ({
    children,
    col,
    wrap,
    wfull,
    maxWidth,
    minheight,
    justify,
    align,
    bg,
    gap,
}: FlexProps) => {
    return (
        <StyledFlex
            $col={col ? 1 : 0}
            $wrap={wrap ? 1 : 0}
            $wfull={wfull ? 1 : 0}
            $minheight={minheight}
            $maxWidth={maxWidth}
            $justify={justify}
            align={align}
            bg={bg}
            $gap={gap}
        >
            {children}
        </StyledFlex>
    );
};

type StyledFlexProps = {
    $col: number;
    $wrap?: number;
    $wfull?: number;
    $minheight?: string;
    $maxWidth?: string;
    $justify?: Justify;
    align?: Align;
    bg?: string;
    $gap?: Gap;
};

const StyledFlex = styled.div<StyledFlexProps>`
    position: relative;
    display: flex;
    flex-direction: ${({ $col }) => ($col ? "column" : "row")};
    flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
    justify-content: ${({ $justify }) => $justify || "center"};
    align-items: ${({ align }) => align || "center"};
    min-height: ${({ $minheight }) => $minheight || 0};
    ${({ $wfull }) =>
        $wfull &&
        css`
            width: 100%;
        `};
    ${({ $maxWidth }) =>
        $maxWidth &&
        css`
            max-width: ${$maxWidth};
        `};
    ${({ bg }) =>
        bg &&
        css`
            background: ${bg};
        `};
    ${({ $gap }) =>
        $gap &&
        css`
            gap: ${$gap};
        `};
`;
