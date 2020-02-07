import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderWrapper = styled.header`
  background-color: ${({ isClicked }) => (isClicked ? "purple" : "green")};
  color: red;
  font-size: 32px;
`

export const Daniel = styled.button`
  font-size: 40px;
`

export const CoolLink = styled(Link)`
  color: #fff;
  font-size: 60px;
`

export const CoolerLink = styled(CoolLink)`
  color: blue;
`
