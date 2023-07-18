import { memo } from "react"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import styled from "styled-components"

export const Pagination = memo(({ actualPage, setActualPage, totalPages }) => {
  const leftPage = actualPage - 1
  const rightPage = actualPage === totalPages ? 0 : actualPage + 1

  const leftDisabled = leftPage === 0
  const rightDisabled = rightPage === 0

  function clickLeftArrow() {
    if (leftDisabled) {
      return
    }
    setActualPage(actualPage - 1)
  }
  function clickRightArrow() {
    if (rightDisabled) {
      return
    }
    setActualPage(actualPage + 1)
  }
  function clickNumber(page) {
    setActualPage(page)
  }

  return (
    <PaginationContainer>
      {!leftDisabled && (
        <>
          <ArrowLeft onClick={() => clickLeftArrow()} />
          <PaginationNumber onClick={() => clickNumber(leftPage)}>
            {leftPage}
          </PaginationNumber>
        </>
      )}
      <PaginationNumber activate={true}>{actualPage}</PaginationNumber>
      {!rightDisabled && (
        <>
          <PaginationNumber onClick={() => clickNumber(rightPage)}>
            {rightPage}
          </PaginationNumber>
          <ArrowRight onClick={() => clickRightArrow()} />
        </>
      )}
    </PaginationContainer>
  )
})

const PaginationNumber = styled.button`
  background-color: transparent;
  font-size: 1.2em;
  font-weight: bold;

  color: ${(props) => (props.activate ? "#000" : "#bdbdbd")};
  border: none;

  cursor: pointer;

  :hover {
    color: black;
  }

  margin-inline: 1rem;
`

const ArrowLeft = styled(AiFillCaretLeft)`
  width: 1rem;
  height: 1rem;
  margin-inline: 1rem;

  cursor: pointer;

  :hover {
    color: #000;
  }
`

const ArrowRight = styled(AiFillCaretRight)`
  width: 1rem;
  height: 1rem;
  margin-inline: 1rem;

  cursor: pointer;

  :hover {
    color: #000;
  }
`

const PaginationContainer = styled.div`
  color: #bdbdbd;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`
