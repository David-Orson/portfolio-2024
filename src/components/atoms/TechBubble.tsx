// npm
import React from "react";
import styled from "styled-components";

// components
import { Text, Flex } from "./index";

// theme
import theme from "../../theme";

type TechBubbleProps = {
    children: React.ReactNode;
    icon?: string;
    size?: "md" | "sm";
};

export const TechBubble = ({
    children,
    icon,
    size = "md",
}: TechBubbleProps) => {
    return (
        <StyledBubble size={size}>
            <Flex>
                <img
                    src={icon}
                    alt="icon"
                    style={{
                        height: `${size === "sm" ? 14 : 20}px`,
                        marginRight: "8px",
                        userSelect: "none",
                    }}
                />
                <Text size={size === "sm" ? "sm" : "lg"}>{children}</Text>
            </Flex>
        </StyledBubble>
    );
};

type StyledBubbleProps = {
    size: "md" | "sm";
};

const StyledBubble = styled.div<StyledBubbleProps>`
    border-radius: ${({ size }) => (size === "md" ? "20px" : "10px")};
    border: 2px solid ${theme.color.text};
    padding: ${({ size }) => (size === "md" ? "8px 16px" : "4px 8px")};
`;

export default TechBubble;
