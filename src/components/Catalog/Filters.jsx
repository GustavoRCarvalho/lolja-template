import styled from "styled-components"
import { FilterCard } from "./FilterCard"
import { useEffect, useState } from "react"

export const Filters = ({ filters = {}, setFilters }) => {
  const selectedFiltersInitialState = {
    preço: [...filters["preço"]],
  }
  const [selectedFilters, setSelectedFilters] = useState(
    selectedFiltersInitialState
  )

  useEffect(() => {
    setFilters(selectedFilters)
  }, [selectedFilters, setFilters])

  const categories = Object.keys(filters)

  return (
    <Filter>
      <FilterTitle>Filtros</FilterTitle>
      {categories.map((category) => (
        <FilterCard
          key={category}
          category={category}
          filters={filters[category]}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      ))}
      <FilterCleanText
        onClick={() => setSelectedFilters(selectedFiltersInitialState)}
      >
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
