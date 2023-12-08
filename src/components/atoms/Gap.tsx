// npm
import styled from "styled-components";

type GapProps = {
    h?: number;
};

export const Gap = styled.div<GapProps>`
    height: ${({ h }) => h}px;
    width: 100%;
`;
