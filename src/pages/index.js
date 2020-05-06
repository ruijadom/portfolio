import React from 'react';
import { Layout, SEO } from 'components/shared';
import { Hero, Projects, Contact, Skills } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Hero />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
