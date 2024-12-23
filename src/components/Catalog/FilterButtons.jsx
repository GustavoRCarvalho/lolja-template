import styled from "styled-components"
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"
import { moneyFormat } from "../common/MoneyFormat"
import { useDispatch, useSelector } from "react-redux"
import {
  setFilter,
  setFilterPrice,
  setFilterRadio,
} from "../../store/filterSlice"

export const FilterButtons = ({ category, filtersLabels }) => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.filter)

  const handleClickPrice = ({ list }) => {
    dispatch(setFilterPrice(list))
  }
  const handleClickRadio = ({ label }) => {
    dispatch(setFilterRadio(label))
  }
  const handleClickButton = ({ label }) => {
    dispatch(setFilter(label))
  }

  switch (category) {
    case "categoria": {
      return filtersLabels.map((label) => (
        <FilterRadioWrapper
          key={label}
          onClick={() => handleClickButton({ label })}
        >
          <RadioButton active={filters[label]} />
          {label}
        </FilterRadioWrapper>
      ))
    }
    case "ordernar":
      return filtersLabels.map((label) => (
        <FilterRadioWrapper
          key={label}
          onClick={() => handleClickRadio({ label })}
        >
          <RadioButton active={filters[label]} />
          {label}
        </FilterRadioWrapper>
      ))
    case "preço":
      return (
        <>
          <SliderPrice
            min={filtersLabels[0]}
            max={filtersLabels[1]}
            step={10}
            value={filters["preço"]}
            onInput={(list) => {
              handleClickPrice({ list: { ...list } })
            }}
          />
          {filters.preço && (
            <PriceWrapper>
              <PriceLabel>{moneyFormat(filters.preço[0])}</PriceLabel>
              <PriceLabel>{moneyFormat(filters.preço[1])}</PriceLabel>
            </PriceWrapper>
          )}
        </>
      )
    default:
      return filtersLabels.map((label) => (
        <FilterButton
          key={label}
          active={filters[label]}
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
    background: var(--orange);
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
