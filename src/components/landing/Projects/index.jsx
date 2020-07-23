import React from 'react'
import { Container, Card } from 'components/shared'
import { Wrapper, Grid, Item, Content } from './styles'

import projects from './projects.json'

export const Projects = () => (

  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>
      {projects.map(({ id, name, url, desc }) => (
        <Item
          key={id}
          as="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <Card>
            <Content>
              <h3>{name}</h3>
              <p>{desc}</p>
            </Content>
          </Card>
        </Item>
      ))}

    </Grid>
  </Wrapper>
)
