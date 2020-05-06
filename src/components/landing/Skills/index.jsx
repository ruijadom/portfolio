import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Container, Button } from "components/shared"
import { Wrapper, SkillsWrapper, Details, Badge, DetailSkill, Thumbnail } from "./styles"
import skills from "./skills.json"

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Details>
        <h1>Tech Skills</h1>
        <DetailSkill>
          {skills.map(({ id, name }) => (
            <Badge key={id}>{name}</Badge>
          ))}
        </DetailSkill>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
