// npm
import React from "react";

// components
import { Flex, TechBubble, Text, Title } from "../atoms";

type ProjectTextProps = {
    company: string;
    role: string;
    description: string;
    technologies: {
        name: string;
        icon: string;
    }[];
};

export const ProjectText = ({
    company,
    role,
    description,
    technologies,
}: ProjectTextProps) => {
    return (
        <>
            <Flex col wfull align="flex-start">
                <Title h={5}>{company}</Title>
                <Text>{role}</Text>
            </Flex>
            <Text size="sm">{description}</Text>
            <Flex wrap align="stretch" gap="8px">
                {technologies.map((tech) => (
                    <TechBubble icon={tech.icon} size={"sm"}>
                        {tech.name}
                    </TechBubble>
                ))}
            </Flex>
        </>
    );
};

export default ProjectText;
