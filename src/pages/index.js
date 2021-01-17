import React from 'react'
import { Layout, SEO } from 'components/shared'
import { Hero, Repositories, Projects, Contact, Skills } from 'components/landing'

export default () => (
  <Layout>
    <SEO />
    <Hero />
    <Repositories />
    <Projects />
    <Contact />
  </Layout>
)
