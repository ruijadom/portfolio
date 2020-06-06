import React from 'react'
import { Container } from 'components/shared'
import contact from 'assets/illustrations/dev.svg'
import { Wrapper, Details, Thumbnail, VerticalBox } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <h2>Contact</h2>
    <VerticalBox>
      <Details>
        <ContactForm />
      </Details>
    </VerticalBox>
  </Wrapper>
)
