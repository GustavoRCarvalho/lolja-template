import styled from "styled-components"
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react"

export const Search = () => {
  const [search, setSearch] = useState("")

  function handleSearch(event) {
    event.preventDefault()
    console.log("Search: ", search)
  }

  return (
    <FormSearch onSubmit={handleSearch}>
      <InputSearch
        onChange={(e) => setSearch(e.target.value)}
        title="Search Input"
        placeholder="Busque por creators, produtos, temas, etc..."
      />
      <SearchButton type="submit" title="Search Button">
        <IconSearch />
      </SearchButton>
    </FormSearch>
  )
}

const FormSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  padding: 0.6rem;

  border: 1px solid #9a9a9a;
  border-radius: 0.5rem;
`

const InputSearch = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
`

const SearchButton = styled.button`
  height: 1.5rem;
  width: 1.5rem;

  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`

const IconSearch = styled(AiOutlineSearch)`
  height: 1.5rem;
  width: 1.5rem;
`
