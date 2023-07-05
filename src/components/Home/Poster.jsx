import styled from "styled-components"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { textRegexRouter } from "../common/textRegexRouter"

export const Poster = ({ srcPoster, title }) => {
  const label = textRegexRouter(title)
  return (
    <NoStyleLinkRouter to={`/${label}`}>
      <Image src={srcPoster} title={title} />
    </NoStyleLinkRouter>
  )
}

const Image = styled.img`
  width: 100%;
`
