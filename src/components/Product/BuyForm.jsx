import styled from "styled-components"
import { BuyButton } from "./BuyButton"
import { Options } from "./Options"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProductToCart } from "../../store/cartSlice"
import { switchCartModal } from "../../store/modalSlice"
import { useRef } from "react"

export const BuyForm = ({ product }) => {
  const dispatch = useDispatch()
  const refOptionsContainer = useRef(null)
  const [productOptions, setProductOptions] = useState({ quantity: 1 })
  const [optionsNotSelected, setOptionsNotSelected] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (buttonActive()) {
      dispatch(
        addProductToCart({
          title: product.title,
          price: product.price,
          salePrice: product.salePrice,
          image: product.images[0],
          quantity: productOptions.quantity,
          color: productOptions.cores,
          size: productOptions.tamanho,
          gender: productOptions.sexo ?? "unissex",
        })
      )
      dispatch(switchCartModal())
    }
  }

  const handleClickSelect = () => {
    if (!buttonActive()) {
      refOptionsContainer.current?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      })
      setOptionsNotSelected(true)
    }
  }

  const buttonActive = () => {
    let options = Object.keys(product.options ?? {})
    options.push("quantity")

    const selectList = JSON.stringify(Object.keys(productOptions).sort())
    const expectList = JSON.stringify(options.sort())

    if (selectList === expectList) {
      return true
    }
    return false
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Options
        options={product.options}
        refOptionsContainer={refOptionsContainer}
        optionsNotSelected={optionsNotSelected}
        setOptionsNotSelected={setOptionsNotSelected}
        productOptions={productOptions}
        setProductOptions={setProductOptions}
      />
      <BuyButton
        buttonActive={buttonActive()}
        setProductOptions={setProductOptions}
        handleClickSelect={handleClickSelect}
      />
    </Form>
  )
}

const Form = styled.form``
