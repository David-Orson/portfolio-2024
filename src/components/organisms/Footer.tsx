// npm
import React from "react";

// components
import { Flex, Title } from "../atoms";

export const Footer = () => {
    // methods
    const sendEmail = () => {
        console.log("send email");
        window.location.href = "mailto:onlyorson@outlook.com";
    };

    return (
        <footer>
            <Flex minheight="200px" align="flex-end">
                <div
                    style={{
                        zIndex: 2,
                    }}
                    onClick={sendEmail}
                >
                    <Title h={4} userSelect="auto">
                        onlyorson@outlook.com
                    </Title>
                </div>
            </Flex>
        </footer>
    );
};

export default Footer;
