// npm
import React from "react";

// hooks
import { useWindowSize } from "../../hooks/ui/useWindowSize";

// components
import { Flex, Gap, Text, Title } from "../atoms";
import { ProjectText } from "../molecules";

// assets
import Lines from "../../svg/Lines";
import Clere from "../../assets/clere-golf-hub2.jpeg";
import LoadBalaner from "../../assets/loadbalancer2.jpeg";
import Nautilus from "../../assets/nautilus.jpeg";

import Docker from "../../assets/docker.png";
import ReactIcon from "../../assets/react.png";
import Go from "../../assets/gopher.png";
import TypeScript from "../../assets/typescript.png";
import Kubernetes from "../../assets/kubernetes.png";
import Linux from "../../assets/linux.png";
import Postgres from "../../assets/postgres.png";
import MySQL from "../../assets/mysql.png";
import Vue from "../../assets/vue.png";
import ReactNative from "../../assets/react-native.png";
import Aws from "../../assets/aws.png";

const ClereTechnologies = [
    { name: "React", icon: ReactIcon },
    { name: "React Native", icon: ReactNative },
    { name: "Vue", icon: Vue },
    { name: "TypeScript", icon: TypeScript },
    { name: "PostGIS", icon: Postgres },
    { name: "Golang", icon: Go },
    { name: "Docker", icon: Docker },
    { name: "Linux", icon: Linux },
];
const LoadTechnologies = [
    { name: "Golang", icon: Go },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Linux", icon: Linux },
];
const NautTechnologies = [
    { name: "React", icon: ReactIcon },
    { name: "Golang", icon: Go },
    { name: "TypeScript", icon: TypeScript },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Linux", icon: Linux },
    { name: "MySQL", icon: MySQL },
    { name: "AWS", icon: Aws },
];

export const Projects = () => {
    // hooks
    const w = useWindowSize();

    return (
        <>
            <Flex>
                <Flex wfull maxWidth="85%" justify="flex-start">
                    <Text bold size="xl" weight={900}>
                        {"<"}
                    </Text>
                    <Title h={4}>Projects /</Title>
                    <Text bold size="xl" weight={900}>
                        {">"}
                    </Text>
                </Flex>
            </Flex>
            <Gap h={32} />
            <Flex col gap={"128px"}>
                <Flex wfull maxWidth="85%" justify="flex-start" gap={"64px"}>
                    <div
                        style={{
                            position: "absolute",
                            width: "110%",
                            height: "100%",
                            left: "-2%",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "200%",
                                top: "-52%",
                                zIndex: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Lines />
                        </div>
                    </div>

                    <Flex
                        col
                        wfull
                        maxWidth="100%"
                        justify="flex-start"
                        align="flex-start"
                        gap={w > 1200 ? "64px" : "32px"}
                    >
                        <ProjectText
                            company={"Clere Golf Hub"}
                            role={"Lead Developer"}
                            description="Working with a team, we created a golf course
                            tournament planning software from the ground up. The
                            hub processes drone survey image and elevation data
                            to innovate course management. Used by market
                            leaders such as the PGA Tour, Ryder Cup and European
                            Tour. This service is continuing to serve the
                            golfing industry and has lucrative returns.
                        "
                            technologies={ClereTechnologies}
                        />
                        {w < 1025 && (
                            <img
                                src={Clere}
                                alt="Clere Golf Hub"
                                style={{
                                    width: "100%",
                                    maxWidth: "100%",
                                    zIndex: 2,
                                    userSelect: "none",
                                }}
                            />
                        )}
                    </Flex>
                    {w >= 1025 && (
                        <img
                            src={Clere}
                            alt="Clere Golf Hub"
                            style={{
                                width: "60%",
                                maxWidth: "60%",
                                zIndex: 2,
                                userSelect: "none",
                            }}
                        />
                    )}
                </Flex>

                <Flex wfull maxWidth="85%" justify="flex-start" gap={"64px"}>
                    <div
                        style={{
                            position: "absolute",
                            width: "110%",
                            height: "100%",
                            left: "-8%",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "200%",
                                top: "-48%",
                                transform: "rotate(180deg)",
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Lines />
                        </div>
                    </div>
                    {w >= 1025 && (
                        <img
                            src={LoadBalaner}
                            alt="Loadbalancer.org"
                            style={{
                                width: "60%",
                                maxWidth: "60%",
                                height: "auto",
                                zIndex: 2,
                                userSelect: "none",
                            }}
                        />
                    )}
                    <Flex
                        col
                        wfull
                        maxWidth="100%"
                        justify="flex-start"
                        align="flex-start"
                        gap={w > 1200 ? "64px" : "32px"}
                    >
                        <ProjectText
                            company={"Loadbalancer.org"}
                            role={"Golang Engineer"}
                            description="Working with a fast growing company in the UK, I
                            developed features and a testing framework for a
                            customer portal. Customers can manage load balancers
                            for their applications and data. Security was a top
                            concern, along with robust software. I managed the
                            implementation of RBAC authentication compatible
                            with IAM providers.
                        "
                            technologies={LoadTechnologies}
                        />

                        {w < 1025 && (
                            <img
                                src={LoadBalaner}
                                alt="Loadbalancer.org"
                                style={{
                                    width: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                    zIndex: 2,
                                    userSelect: "none",
                                }}
                            />
                        )}
                    </Flex>
                </Flex>
                <Flex wfull maxWidth="85%" justify="flex-start" gap={"64px"}>
                    <div
                        style={{
                            position: "absolute",
                            width: "110%",
                            height: "100%",
                            left: "-2%",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "200%",
                                top: "-52%",
                                zIndex: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Lines />
                        </div>
                    </div>

                    <Flex
                        col
                        wfull
                        maxWidth="100%"
                        justify="flex-start"
                        align="flex-start"
                        gap={w > 1200 ? "64px" : "32px"}
                        minheight="100%"
                    >
                        <ProjectText
                            company={"Nautilus Network"}
                            role={"Full Stack Developer"}
                            description="Collaborating with a team of engineers to develop a
                            CRM from the ground up for a telecomms provider. The
                            application allows admins to manage customers and
                            generate custom call usage invoices. A CRM for
                            telecomms customers
                        "
                            technologies={NautTechnologies}
                        />
                        {w < 1025 && (
                            <img
                                src={Nautilus}
                                alt="Nautilus"
                                style={{
                                    width: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                    zIndex: 2,
                                    userSelect: "none",
                                }}
                            />
                        )}
                    </Flex>
                    {w >= 1025 && (
                        <img
                            src={Nautilus}
                            alt="Nautilus"
                            style={{
                                width: "60%",
                                maxWidth: "60%",
                                height: "auto",
                                zIndex: 2,
                                userSelect: "none",
                            }}
                        />
                    )}
                </Flex>
            </Flex>
        </>
    );
};

export default Projects;
