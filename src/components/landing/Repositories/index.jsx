import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/shared'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Repositories = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 21, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper as={Container} id="repositories">
      <h2>Repositories on GitHub</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
