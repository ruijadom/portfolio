import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "components/theme";
import { Container, Button } from "components/shared";
import dev from 'assets/photo.png';


import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles"

export const Hero = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Rui Domingues and I’m a Front-End Developer!</h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </IntroWrapper>
  </Wrapper>
)
