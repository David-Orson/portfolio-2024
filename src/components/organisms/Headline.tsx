// npm
import React from "react";

// hooks
import { useWindowSize } from "../../hooks/ui/useWindowSize";

// components
import { Flex, Title, Button, Text } from "../atoms";

export const Headline = () => {
    // hooks
    const w = useWindowSize();

    return (
        <Flex
            col
            justify="space-evenly"
            minheight={w > 768 ? "600px" : "400px"}
        >
            <Flex col wfull>
                <Title h={1}>David Orson</Title>
                <Title h={4}>Software, Dev Ops, Management</Title>
            </Flex>
            <Flex col gap={"16px"}>
                <Text bold>Ready to develop solutions?</Text>
                <Button onClick={() => console.log("hi")}>Contact Me</Button>
            </Flex>
        </Flex>
    );
};

export default Headline;
