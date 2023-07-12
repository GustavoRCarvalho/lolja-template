import styled from "styled-components"
import { BuyButton } from "./BuyButton"
import { Options } from "./Options"
import { useState } from "react"

export const BuyForm = ({ product }) => {
  const [productOptions, setProductOptions] = useState({ quantity: 1 })

  function handleSubmit(event) {
    event.preventDefault()
    if (buttonActive()) {
      console.log(productOptions)
    }
  }

  function buttonActive() {
    let options = Object.keys(product.options)
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
        productOptions={productOptions}
        setProductOptions={setProductOptions}
      />
      <BuyButton
        buttonActive={buttonActive()}
        setProductOptions={setProductOptions}
      />
    </Form>
  )
}

const Form = styled.form``
