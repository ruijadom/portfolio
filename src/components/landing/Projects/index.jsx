import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/shared'
import { Wrapper, Grid, Item, Content } from './styles'

export const Projects = () => {
  const {
    allProjectsJson: { edges },
  } = useStaticQuery(
    graphql`
      {
        allProjectsJson {
          edges {
            node {
              id
              name
              desc
              url
              img
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <Content>
                <h3>{node.name}</h3>
                <p>{node.desc}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
