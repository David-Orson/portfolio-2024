// npm
import React from "react";
import styled from "styled-components";

// hooks
import { useWindowSize } from "../../hooks/ui/useWindowSize";

// components
import { Text, Flex } from "./index";

// theme
import theme from "../../theme";

type TechBubbleProps = {
    children: React.ReactNode;
    icon?: string;
};

export const TechBubble = ({ children, icon }: TechBubbleProps) => {
    // hooks
    const w = useWindowSize();

    return (
        <StyledBubble w={w}>
            <Flex>
                <img
                    src={icon}
                    alt="icon"
                    style={{
                        height: `${w < 768 ? 14 : 20}px`,
                        marginRight: "8px",
                    }}
                />
                <Text size={w > 768 ? "lg" : "sm"}>{children}</Text>
            </Flex>
        </StyledBubble>
    );
};

type StyledBubbleProps = {
    w: number;
};

const StyledBubble = styled.div<StyledBubbleProps>`
    border-radius: ${({ w }) => (w > 768 ? "20px" : "10px")};
    border: 2px solid ${theme.color.text};
    padding: ${({ w }) => (w > 768 ? "8px 16px" : "4px 8px")};
`;

export default TechBubble;
