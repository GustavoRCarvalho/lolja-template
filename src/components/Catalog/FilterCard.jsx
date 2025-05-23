import { useState } from "react"
import styled from "styled-components"
import { AiFillCaretDown } from "react-icons/ai"
import { AiFillCaretUp } from "react-icons/ai"
import { FilterButtons } from "./FilterButtons"

export const FilterCard = ({ category, filtersLabels }) => {
  const [showCard, setShowCard] = useState(window.screen.width > 1024)

  return (
    <FiltrosContainer>
      <CategoryDropdown onClick={() => setShowCard((value) => !value)}>
        {category.toUpperCase()} {showCard ? <UpArrow /> : <DownArrow />}
      </CategoryDropdown>
      {showCard && (
        <FiltersWrapper>
          <FilterButtons category={category} filtersLabels={filtersLabels} />
        </FiltersWrapper>
      )}
    </FiltrosContainer>
  )
}
const CategoryDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  font-size: 0.9em;

  font-weight: bold;
  letter-spacing: 0.2em;

  cursor: pointer;
`
const FiltrosContainer = styled.div`
  background-color: var(--mediumGray);

  width: 15em;
  border-radius: 0.4em;
  padding: 0.7em;

  margin-block: 1em;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;

  margin-block: 1em;
`

const DownArrow = styled(AiFillCaretDown)`
  width: 1rem;
  height: 1rem;
`
const UpArrow = styled(AiFillCaretUp)`
  width: 1rem;
  height: 1rem;
`
