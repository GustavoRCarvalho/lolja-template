import styled from "styled-components"
import { FilterCard } from "./FilterCard"
import { useState } from "react"

export const Filters = ({ filters = {} }) => {
  const priceFilter = filters["preço"]
  const [selectedFilters, setSelectedFilters] = useState({
    preço: [...priceFilter],
  })
  const categories = Object.keys(filters)

  return (
    <div>
      <FiltrosTitle>Filtros</FiltrosTitle>
      {categories.map((category) => (
        <FilterCard
          key={category}
          category={category}
          filters={filters[category]}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      ))}
    </div>
  )
}

const FiltrosTitle = styled.h2`
  width: 100%;

  font-size: 2em;
`
