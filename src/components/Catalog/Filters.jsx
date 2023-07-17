import styled from "styled-components"
import { FilterCard } from "./FilterCard"
import { useEffect } from "react"

export const Filters = ({
  listFilters = {},
  selectedFilters,
  setSelectedFilters,
}) => {
  useEffect(() => {
    setSelectedFilters({
      preço: listFilters["preço"],
    })
  }, [listFilters, setSelectedFilters])

  const categories = Object.keys(listFilters)

  console.log(selectedFilters)

  return (
    <Filter>
      <FilterTitle>Filtros</FilterTitle>
      {categories.map((category) => (
        <FilterCard
          key={category}
          category={category}
          filters={listFilters[category]}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      ))}
      <FilterCleanText
        onClick={() =>
          setSelectedFilters({
            preço: listFilters["preço"],
          })
        }
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
