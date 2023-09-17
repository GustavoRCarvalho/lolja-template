import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { useCookies } from "react-cookie"
import { useState } from "react"

export const AcceptCookies = () => {
  const [cookies, setCookie] = useCookies("acceptCookies")
  const [isAccept, setIsAccept] = useState(cookies.acceptCookies)

  const handleClickOkay = () => {
    setIsAccept(true)
    setCookie("acceptCookies", true)
  }

  return (
    <ContentContainerCustom $show={!isAccept}>
      <Card>
        <SpanWrapper>
          This website user cookies to ensure you get the best experience on our
          website.
          <SpanMore>Learn More</SpanMore>
        </SpanWrapper>
        <CookiesButton onClick={handleClickOkay}>Okay</CookiesButton>
      </Card>
    </ContentContainerCustom>
  )
}

const ContentContainerCustom = styled(ContentContainer)`
  position: fixed;
  bottom: 1em;

  display: ${(props) => (props.$show ? "flex" : "none")};
  justify-content: center;

  z-index: 1;
`

const CookiesButton = styled.button`
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 0.25em;

  padding-block: 0.5em;
  padding-inline: 1em;
  margin-inline: 0.3em;

  cursor: pointer;
`

const SpanMore = styled.span`
  color: blue;
  font-weight: bold;

  min-width: max-content;
  margin-inline: 0.3em;

  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    margin-top: 0.5em;
  }
`

const SpanWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    flex-direction: column;
  }
`

const Card = styled.div`
  background-color: var(--bg-white);
  box-shadow: 0 0 1em 0.1em #00000065;

  height: max-content;

  padding-block: 0.5em;
  padding-inline: 1em;
  border-radius: 0.5em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-transform: none;
`
