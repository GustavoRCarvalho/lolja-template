import styled from "styled-components"
import {
  QuantityWrapper,
  QuantityButton,
  QuantityInput,
} from "../Product/BuyButton"
import {
  removeProductFromCart,
  updateCartProductQuantity,
} from "../../store/cartSlice"
import { moneyFormat } from "../common/MoneyFormat"
import { useDispatch } from "react-redux"

export const ProductCheckout = ({ products }) => {
  const dispatch = useDispatch()

  function quantityPlus(number = 0, product) {
    let newNumber = product.quantity + number
    dispatch(updateCartProductQuantity({ newNumber, product }))
  }

  function removeProduct(product) {
    dispatch(removeProductFromCart(product))
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Unit.</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr>
              <ProductDescrition>
                <img src={product.image} />
                <div>
                  <h3>{product.title}</h3>
                  <span>
                    {product.size} {product.gender} {product.color}
                  </span>
                  <button
                    onClick={() => {
                      removeProduct(product)
                    }}
                  >
                    Remover
                  </button>
                </div>
              </ProductDescrition>
              <UnitPrice>
                <span>{moneyFormat(product.price)}</span>
                <span>{moneyFormat(product.salePrice)}</span>
              </UnitPrice>
              <td>
                <QuantityCustom>
                  <QuantityButton
                    onClick={() => {
                      quantityPlus(-1, product)
                    }}
                  >
                    -
                  </QuantityButton>
                  <QuantityInput readOnly value={product.quantity} />
                  <QuantityButton
                    onClick={() => {
                      quantityPlus(1, product)
                    }}
                  >
                    +
                  </QuantityButton>
                </QuantityCustom>
              </td>
              <td>
                <strong>
                  {moneyFormat(product.salePrice * product.quantity)}
                </strong>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

const QuantityCustom = styled(QuantityWrapper)`
  margin: auto;
`

const Table = styled.table`
  th,
  td {
    text-align: start;
    font-weight: 500;

    &:nth-last-child(1) {
      text-align: end;
    }
    &:nth-last-child(2) {
      text-align: center;
    }
  }
`

const ProductDescrition = styled.td`
  display: flex;
  gap: 0.5em;

  img {
    display: block;
    min-width: 6em;
    width: 6em;
    height: 6em;
    border-radius: 0.5em;
  }

  h3 {
    display: block;
    font-size: 1.2em;
    line-height: 1.2em;

    margin: 0;

    text-transform: uppercase;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    color: gray;
  }

  button {
    display: block;

    background-color: transparent;
    text-decoration: underline;

    border: none;

    cursor: pointer;

    padding: 0;
  }
`

const UnitPrice = styled.td`
  span {
    display: block;
    width: max-content;

    color: gray;
    &:nth-child(1) {
      text-decoration: line-through;
    }
  }
`
