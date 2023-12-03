// npm
import React from "react";

// components
import { Flex, Title, Button, Text } from "../atoms";

export const Headline = () => {
    return (
        <Flex col justify="space-evenly" minheight="600px">
            <Flex col wfull>
                <Title h={1}>David Orson</Title>
                <Title h={4}>Software Engineer</Title>
            </Flex>
            <Flex col gap={"16px"}>
                <Text>Ready to collaborate?</Text>
                <Button onClick={() => console.log("hi")}>Click Me</Button>
            </Flex>
        </Flex>
    );
};

export default Headline;
