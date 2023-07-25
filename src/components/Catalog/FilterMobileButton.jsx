import styled from "styled-components"
import { BsArrowDownUp } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { switchFilterModal } from "../../store/modalSlice"

export const FilterMobileButton = () => {
  const dispatch = useDispatch()

  function handleButtonClick() {
    dispatch(switchFilterModal())
  }

  return (
    <FilterContainer>
      <FilterButton onClick={handleButtonClick}>
        <FilterIcon />
        Filtros
      </FilterButton>
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  display: none;

  justify-content: end;
  align-items: center;

  width: 100%;
  margin-top: 2rem;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`

const FilterButton = styled.button`
  background-color: #0000;

  align-items: center;

  border: none;
  font-size: 1.5em;
  cursor: pointer;
`

const FilterIcon = styled(BsArrowDownUp)`
  width: 1em;
  height: 1em;

  margin-right: 0.5em;
`
