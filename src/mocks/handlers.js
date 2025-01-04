import { http, HttpResponse } from "msw"
import productsJson from "./products.json"

export const handlers = [
  http.get("/api/products/:quantity", (req) => {
    const { quantity } = req.params
    const products = Array.apply(null, Array(Number(quantity))).map(() => {
      const productId = Math.ceil(Math.random(0) * 8)

      return productsJson[productId]
    })

    return HttpResponse.json(products, { status: 200 })
  }),
  http.get("/api/product/:title", (req) => {
    const { title } = req.params
    const product = Object.values(productsJson).filter(
      ({ title: prodTitle }) => title === prodTitle
    )[0]
    return HttpResponse.json(product, { status: 200 })
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

    return HttpResponse.json(creators, { status: 200 })
  }),
  http.get("/api/check-ship/:input", (req) => {
    const { input } = req.params
    if (input === "12345-678") {
      return HttpResponse.json({ price: 21.78 }, { status: 200 })
    }
    return HttpResponse.json({ price: 31.73 }, { status: 200 })
  }),
  http.get("/api/check-cupom/:input", (req) => {
    const { input } = req.params
    if (input === "cupom123") {
      return HttpResponse.json({ desc: 0.2 }, { status: 200 })
    }
    return HttpResponse.json({ desc: 0.1 }, { status: 200 })
  }),
]
