// npm
import React from "react";
import styled from "styled-components";

// hooks
import { useWindowSize } from "../../hooks/ui/useWindowSize";

// components
import { Flex, Title, Text, Padding, TechBubble } from "../atoms";

// assets
import pfp from "../../assets/pfp.jpeg";
import Stars from "../../svg/Stars";
import Docker from "../../assets/docker.png";
import ReactIcon from "../../assets/react.png";
import Go from "../../assets/gopher.png";
import TypeScript from "../../assets/typescript.png";
import Kubernetes from "../../assets/kubernetes.png";
import Linux from "../../assets/linux.png";
import Postgres from "../../assets/postgres.png";
import MySQL from "../../assets/mysql.png";
import Vue from "../../assets/vue.png";
import Python from "../../assets/python.png";
import Node from "../../assets/node.png";
import Rust from "../../assets/rust.png";
import ReactNative from "../../assets/react-native.png";
import Aws from "../../assets/aws.png";
import Vim from "../../assets/vim.png";

const Technologies = [
    { name: "React", icon: ReactIcon },
    { name: "Golang", icon: Go },
    { name: "TypeScript", icon: TypeScript },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Linux", icon: Linux },
    { name: "PostgreSQL + PostGIS", icon: Postgres },
    { name: "MySQL", icon: MySQL },
    { name: "Vue", icon: Vue },
    { name: "Python", icon: Python },
    { name: "Node", icon: Node },
    { name: "Rust", icon: Rust },
    { name: "React Native", icon: ReactNative },
    { name: "AWS", icon: Aws },
    { name: "Vim", icon: Vim },
];

export const About = () => {
    // hooks
    const w = useWindowSize();

    return (
        <Flex>
            <div
                style={{
                    position: "absolute",
                    top: "-100px",
                    left: `${w > 768 ? "45%" : 0}`,
                    width: `${w > 768 ? "55%" : "100%"}`,
                    height: "100%",
                }}
            >
                <Stars />
            </div>
            <Flex
                col={w < 1460}
                wfull
                wrap
                align={w < 1460 ? "center" : "flex-start"}
                justify="space-between"
                maxWidth="85%"
                gap={w < 1460 ? "64px" : "2px"}
            >
                {w < 1460 && (
                    <ImageContainer>
                        <img src={pfp} alt="pfp" />
                    </ImageContainer>
                )}
                <Flex
                    col
                    maxWidth="800px"
                    justify="space-evenly"
                    minheight="400px"
                >
                    <Flex wfull justify="flex-start">
                        <Text bold size="xl" weight={900}>
                            {"<"}
                        </Text>
                        <Title h={4}>About /</Title>
                        <Text bold size="xl" weight={900}>
                            {">"}
                        </Text>
                    </Flex>
                    <Gap />
                    <Gap />
                    <Padding px={8}>
                        <Text>
                            I am a software engineer with years of leadership
                            experience. I specialise in developing software
                            applications from the ground up. Coding standards
                            and UX are critical for long term projects. Let's
                            strike the balance of rapid feature delivery and
                            sustainability.
                        </Text>
                        <Gap />
                        <Text>I work with the following technologies:</Text>
                        <Gap />
                        <Flex
                            wrap
                            align="stretch"
                            gap={w > 768 ? "16px" : "12px"}
                        >
                            {Technologies.map((tech) => (
                                <TechBubble
                                    icon={tech.icon}
                                    size={w > 768 ? "md" : "sm"}
                                >
                                    {tech.name}
                                </TechBubble>
                            ))}
                        </Flex>
                        <Gap />
                    </Padding>
                </Flex>
                {w > 1459 && (
                    <ImageContainer>
                        <img src={pfp} alt="pfp" />
                    </ImageContainer>
                )}
            </Flex>
        </Flex>
    );
};

const ImageContainer = styled.div`
    max-height: 400px;
    max-width: 400px;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: 0 0 0 10px hsl(213, 100%, 5%);
    border: 10px solid hsl(213, 100%, 5%);
    user-select: none;

    img {
        height: 100%;
        width: 100%;
    }
`;

const Gap = styled.div`
    height: 16px;
    width: 100%;
`;

export default About;
