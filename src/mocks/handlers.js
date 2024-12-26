import { http, HttpResponse } from "msw"
import productsJson from "./products.json"

export const handlers = [
  http.get("/api/products/:quantity", (req) => {
    const { quantity } = req.params
    const products = Array.apply(null, Array(Number(quantity))).map(() => {
      const productId = Math.ceil(Math.random(0) * 8)

      return productsJson[productId]
    })

    return HttpResponse.json(products)
  }),
  http.get("/api/product/:title", (req) => {
    const { title } = req.params
    const product = Object.values(productsJson).filter(
      ({ title: prodTitle }) => title === prodTitle
    )[0]
    return HttpResponse.json(product)
  }),
  http.get("/api/creators", () => {
    const products = (quantity) =>
      Array.apply(null, Array(Number(quantity))).map(() => {
        const productId = Math.ceil(Math.random(0) * 8)

        return productsJson[productId]
      })

    const creators = {
      "old skull": products(12),
      guaxinim: products(5),
      webtvbrasileira: products(3),
      keira: products(8),
    }

    return HttpResponse.json(creators)
  }),
]
