import React from 'react';
import { Layout, SEO } from 'components/shared';
import { Hero, Projects, Contact, Skills } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <h1>Ruijadom</h1>
    <Hero />
    <Projects />
    <Contact />
    <Skills />
  </Layout>
);
