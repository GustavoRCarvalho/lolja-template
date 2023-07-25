import styled from "styled-components"
import { FilterCard } from "./FilterCard"
import { useDispatch } from "react-redux"
import { resetFilter } from "../../store/filterSlice"

export const Filters = ({ listFilters = {} }, props) => {
  const dispatch = useDispatch()
  const categories = Object.keys(listFilters)

  return (
    <Filter {...props}>
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

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin-bottom: 1em;
  }
`

const Filter = styled.div`
  margin-right: 3em;
  @media screen and (max-width: 1024px) {
    margin-inline: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
