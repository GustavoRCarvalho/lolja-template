import styled from "styled-components"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"

export const Poster = ({ srcPoster, title }) => {
  return (
    <NoStyleLinkRouter to={`/${title}`}>
      <Image src={srcPoster} title={title} />
    </NoStyleLinkRouter>
  )
}

const Image = styled.img`
  width: 100%;
`
