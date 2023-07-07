import styled from "styled-components"

export const Filters = () => {
  return (
    <FiltersContainer>
      <FiltersWrapper></FiltersWrapper>
    </FiltersContainer>
  )
}

const FiltersWrapper = styled.div`
  background-color: ${(props) => props.theme.mediumGray};

  margin-right: 3rem;
  width: 26rem;
  height: 100vh;
`

const FiltersContainer = styled.div``
