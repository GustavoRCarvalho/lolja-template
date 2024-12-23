import { useState } from "react"
import styled from "styled-components"
import { BsCartPlus } from "react-icons/bs"

export const BuyButton = ({
  buttonActive,
  setProductOptions,
  handleClickSelect,
}) => {
  const [quantity, setQuantity] = useState(1)

  const clickQuatityButton = (changeValue) => {
    setQuantity((value) => {
      const newValue = value + changeValue
      if ((newValue !== 0) & (newValue < 100)) {
        return newValue
      }
      return value
    })
    setProductOptions((value) => {
      const newValue = quantity + changeValue
      if ((newValue !== 0) & (newValue < 100)) {
        return { ...value, quantity: newValue }
      }
      return value
    })
  }

  return (
    <OptionsContainer>
      <QuantityWrapper>
        <QuantityButton
          onClick={(e) => {
            e.preventDefault()
            clickQuatityButton(-1)
          }}
        >
          -
        </QuantityButton>
        <QuantityInput readOnly value={quantity} />
        <QuantityButton
          onClick={(e) => {
            e.preventDefault()
            clickQuatityButton(1)
          }}
        >
          +
        </QuantityButton>
      </QuantityWrapper>
      <AddCardButton
        active={buttonActive}
        type="submit"
        onClick={handleClickSelect}
      >
        {buttonActive ? (
          <>
            <CartIcon /> adicionar
          </>
        ) : (
          "selecionar opções"
        )}
      </AddCardButton>
    </OptionsContainer>
  )
}

const OptionsContainer = styled.div`
  max-width: 100%;
  margin-block: 2em;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: -webkit-fill-available;
    margin: 0;
    padding: 1em;
    z-index: 2;
  }
`

const CartIcon = styled(BsCartPlus)`
  width: 1.3em;
  height: 1.3em;

  margin-right: 0.5em;
`

const AddCardButton = styled.button`
  background-color: var(--green);
  transition: background-color 250ms;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  max-width: 20em;

  cursor: ${(props) => (props.active ? "pointer" : "normal")};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.05em;

  border-radius: 1.5em;
  border: none;

  :hover {
    background-color: ${(props) => (props.active ? "#eb7e01" : "var(--green)")};
    transition: background-color 250ms;
  }
`

const QuantityWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;

  max-width: max-content;

  display: flex;
  margin-right: 2rem;
`

const QuantityInput = styled.input`
  background-color: #0000;

  font-size: 0.8em;
  width: 3rem;

  border: none;

  padding: 0;
  text-align: center;
`

const QuantityButton = styled.button`
  background-color: #0000;

  display: grid;
  place-items: center;

  width: 3em;
  height: 3em;

  font-size: 1em;
  font-weight: bold;
  letter-spacing: 0.03em;

  :active {
    background-color: var(--green);
    color: #fff;
    transition: color 0.1s, background-color 0.2s;
  }

  cursor: pointer;

  border: none;
  padding: 0;
`
