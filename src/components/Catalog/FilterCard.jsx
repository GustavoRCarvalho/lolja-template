import { useState } from "react"
import styled from "styled-components"
import { AiFillCaretDown } from "react-icons/ai"
import { AiFillCaretUp } from "react-icons/ai"

export const FilterCard = ({
  category,
  filters,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [showCard, setShowCard] = useState(true)

  return (
    <FiltrosContainer>
      <CategoryDropdown onClick={() => setShowCard((value) => !value)}>
        {category.toUpperCase()} {showCard ? <UpArrow /> : <DownArrow />}
      </CategoryDropdown>
      {showCard && (
        <FiltersWrapper>
          {filters.map((label) => (
            <FiltroButton
              key={label}
              active={selectedFilters[label]}
              onClick={() =>
                setSelectedFilters((value) => {
                  return { ...value, [label]: !value[label] }
                })
              }
            >
              {label}
            </FiltroButton>
          ))}
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
  background-color: ${(props) => props.theme.mediumGray};

  width: 15em;
  border-radius: 0.4em;
  margin-right: 3em;
  padding: 0.7em;

  margin-block: 1em;
`

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;

  margin-block: 1em;
`

const FiltroButton = styled.button`
  background-color: #e0e0e0;
  border-radius: 0.2em;
  font-weight: bold;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  width: max-content;
  height: min-content;
  padding: 0.4em 0.6em;
  border: none;
  cursor: pointer;

  border: ${(props) => props.active && "2px solid black"};
`

const DownArrow = styled(AiFillCaretDown)`
  width: 1rem;
  height: 1rem;
`
const UpArrow = styled(AiFillCaretUp)`
  width: 1rem;
  height: 1rem;
`
