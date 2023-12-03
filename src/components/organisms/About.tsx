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
import Docker from "../../assets/icons8-docker-144.png";
import ReactIcon from "../../assets/icons8-react-160.png";
import Go from "../../assets/file_type_go_gopher_icon_130571.png";
import TypeScript from "../../assets/icons8-typescript-144.png";
import Kubernetes from "../../assets/icons8-kubernetes-144.png";
import Linux from "../../assets/icons8-linux-24.png";
import Postgres from "../../assets/icons8-postgres-144.png";
import MySQL from "../../assets/icons8-mysql-96.png";
import Vue from "../../assets/icons8-vue.js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-96.png";
import Python from "../../assets/icons8-python-144.png";
import Node from "../../assets/icons8-node.js-96.png";
import Rust from "../../assets/rust.png";
import ReactNative from "../../assets/icons8-react-native-96.png";
import Aws from "../../assets/icons8-amazon-aws-96.png";
import Vim from "../../assets/icons8-vim-a-highly-configurable-text-editor-for-efficiently-creating-and-changing-any-kind-of-text-96.png";

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
                wfull
                wrap
                align="flex-start"
                justify="space-evenly"
                maxWidth="90%"
            >
                {w < 1382 && (
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
                                <TechBubble icon={tech.icon}>
                                    {tech.name}
                                </TechBubble>
                            ))}
                        </Flex>
                        <Gap />
                    </Padding>
                </Flex>
                {w > 1381 && (
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
