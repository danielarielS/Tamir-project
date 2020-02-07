import React from "react"
import GlobalStyle from "../components/layout"
import { CoolLink } from "../components/Header/styles"
import Header from "../components/Header/Header"

export default () => (
  <>
    <GlobalStyle />
    <Header />
    <div>Tamir shina it's alive!!!!!!!</div>
    <CoolLink to="/tamir">Go to see tamir's page</CoolLink>
    <Header />
  </>
)
