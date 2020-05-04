import React from "react";
import { Footer } from 'components/theme';
import { Global } from "./styles";

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}
    <Footer />
  </>
)
