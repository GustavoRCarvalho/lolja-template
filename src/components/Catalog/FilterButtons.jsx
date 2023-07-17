import styled from "styled-components"
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"
import { moneyFormat } from "../common/MoneyFormat"

export const FilterButtons = ({
  category,
  list,
  selectedFilters,
  setSelectedFilters,
}) => {
  const handleClickPrice = ({ list }) => {
    setSelectedFilters((value) => {
      return {
        ...value,
        preço: [list[0], list[1]],
      }
    })
  }
  const handleClickRadio = ({ label }) => {
    setSelectedFilters((value) => {
      return {
        ...value,
        "MAIS RECENTES": false,
        "MAIS ANTIGOS": false,
        "MENOR PREÇO": false,
        "MAIOR PREÇO": false,
        [label]: !value[label],
      }
    })
  }
  const handleClickButton = ({ label }) => {
    setSelectedFilters((value) => {
      return { ...value, [label]: !value[label] }
    })
  }

  switch (category) {
    case "categoria":
      return list.map((label) => (
        <FilterRadioWrapper
          key={label}
          onClick={() => handleClickButton({ label })}
        >
          <RadioButton active={selectedFilters[label]} />
          {label}
        </FilterRadioWrapper>
      ))
    case "ordernar":
      return list.map((label) => (
        <FilterRadioWrapper
          key={label}
          onClick={() => handleClickRadio({ label })}
        >
          <RadioButton active={selectedFilters[label]} />
          {label}
        </FilterRadioWrapper>
      ))
    case "preço":
      return (
        <>
          <SliderPrice
            min={list[0]}
            max={list[1]}
            value={selectedFilters["preço"]}
            onInput={(list) => {
              handleClickPrice({ list: { ...list } })
            }}
          />
          {selectedFilters.preço && (
            <PriceWrapper>
              <PriceLabel>{moneyFormat(selectedFilters.preço[0])}</PriceLabel>
              <PriceLabel>{moneyFormat(selectedFilters.preço[1])}</PriceLabel>
            </PriceWrapper>
          )}
        </>
      )
    default:
      return list.map((label) => (
        <FilterButton
          key={label}
          active={selectedFilters[label]}
          onClick={() => handleClickButton({ label })}
        >
          {label}
        </FilterButton>
      ))
  }
}

const SliderPrice = styled(RangeSlider)`
  .range-slider__thumb {
    background: #fff;
    width: 16px;
    height: 16px;

    border: 1px solid #c0c0c0;
  }

  .range-slider__range {
    background: #fc6133;
  }
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`
const PriceLabel = styled.span`
  font-weight: bold;
`

const FilterRadioWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.2em;
  padding: 0.4em;

  cursor: pointer;
`

const RadioButton = styled.div`
  background-color: ${(props) => props.active && "black"};

  width: 0.7em;
  height: 0.7em;
  border-radius: 0.2em;

  margin-right: 0.5rem;
  border: 2px solid black;
`

const FilterButton = styled.button`
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
