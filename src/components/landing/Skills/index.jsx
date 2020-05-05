import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Container, Button } from "components/shared"
import dev from "assets/illustrations/gameworld.svg"
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles"
import skills from "./skills.json"

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Rui Domingues and I’m a Front-End Developer!" />
      </Thumbnail>
      <Details>
        <h1>Tech Skills</h1>

        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
