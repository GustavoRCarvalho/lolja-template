import { Link } from "react-router-dom"
import styled from "styled-components"

export const NoStyleLinkRouter = (props) => {
  window.scrollTo(0, 0)
  return <NoStyleLink {...props}>{props.children}</NoStyleLink>
}

const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`
