import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/shared'
import { Wrapper, SkillsWrapper, Details, Badge, DetailSkill, Thumbnail } from './styles'
import skills from './skills.json'

export const Skills = () => (
  <Wrapper>
    <SkillsWrapper as={Container}>
      <Details>
        {/* <h2>Tech Skills</h2> */}
        <DetailSkill>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>
          <a href="https://angular.io/" target="_blank">
            <img
              src="https://devicon.dev/devicon.git/icons/angularjs/angularjs-plain.svg"
              alt="angularjs"
              width="40"
              height="40"
            />
          </a>
          <a href="https://webpack.js.org/" target="_blank">
            <img
              src="https://devicon.dev/devicon.git/icons/webpack/webpack-original.svg"
              alt="webpack"
              width="40"
              height="40"
            />
          </a>
          <a href="https://sass-lang.com/" target="_blank">
            <img src="https://devicon.dev/devicon.git/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
          </a>
          <a href="http://lesscss.org/" target="_blank">
            <img
              src="https://devicon.dev/devicon.git/icons/less/less-plain-wordmark.svg"
              alt="less"
              width="40"
              height="40"
            />
          </a>
          <a href="https://gruntjs.com/" target="_blank">
            <img
              src="https://devicon.dev/devicon.git/icons/grunt/grunt-original.svg"
              alt="grunt"
              width="40"
              height="40"
            />
          </a>

          <a href="https://nodejs.org" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />
          </a>
          <a href="https://www.postgresql.org" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.docker.com/" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width="40"
              height="40"
            />
          </a>

          {/*
          {skills.map(({ id, name }) => (
            <Badge key={id}>{name}</Badge>
          ))}          
          */}
        </DetailSkill>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
