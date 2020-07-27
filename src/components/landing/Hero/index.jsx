import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/shared'
import dev from 'assets/photo.png'

import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Hero = () => (
  <Wrapper id="about">
    <Header />
    <Thumbnail>
      <img src={dev} alt="Front-End Developer" />
    </Thumbnail>
    <IntroWrapper as={Container}>
      <Details>
        <h4>Front-End Developer!</h4>
        {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
      </Details>
    </IntroWrapper>
  </Wrapper>
)
