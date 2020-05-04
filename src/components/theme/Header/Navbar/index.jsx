import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/shared';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">Rui Domingues</Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
