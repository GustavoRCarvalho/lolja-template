import moletombranco1 from "./moletombranco1.png"
import moletombranco2 from "./moletombranco2.png"

const obj = {
  images: [moletombranco1, moletombranco2],
  title: "MOLETOM OVERSIZED OFF WHITE - ppLove",
  price: "239,00",
  salePrice: "199,00",
  salePorcent: parseInt(100 - 239.9 / (199 * 100)),
  installmentsPrice: ["6", "33,32"],
  tamanhos: ["P", "M", "G", "2G"],
}

function createList(quantity) {
  let array = Array.apply(null, Array(quantity)).map(() => obj)

  return array
}

export const ListProducts = {
  "old skull": createList(12),
  guaxinim: createList(5),
  webtvbrasileira: createList(3),
  keira: createList(8),
}
