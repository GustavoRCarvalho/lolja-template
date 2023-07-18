import styled from "styled-components"
import { FilterCard } from "./FilterCard"
import { useDispatch } from "react-redux"
import { resetFilter } from "../../store/filterSlice"

export const Filters = ({ listFilters = {} }) => {
  const dispatch = useDispatch()
  const categories = Object.keys(listFilters)

  return (
    <Filter>
      <FilterTitle>Filtros</FilterTitle>
      {categories.map((category) => (
        <FilterCard
          key={category}
          category={category}
          filtersLabels={listFilters[category]}
        />
      ))}
      <FilterCleanText onClick={() => dispatch(resetFilter())}>
        Limpar Filtros
      </FilterCleanText>
    </Filter>
  )
}

const FilterCleanText = styled.div`
  width: 100%;

  text-align: end;
  text-decoration: underline;

  cursor: pointer;
`

const Filter = styled.div`
  margin-right: 3em;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const FilterTitle = styled.h2`
  width: 100%;

  font-size: 2em;
`
