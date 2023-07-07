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

export const ListCatalog = ({ name = "", quantity = 20 }) => {
  if (
    name === "calango" ||
    name === "gabi" ||
    name === "luba" ||
    name === "castro" ||
    name === "nostalgia" ||
    name === "felps" ||
    name === "orichinho" ||
    name === "matt" ||
    name === "inutilismo"
  ) {
    return {
      about: "",
      products: createList(quantity),
    }
  } else {
    return {
      about:
        "Ela pode parecer colorida e alegre à primeira vista, mas ela é a mistura da primavera cheia de cor, com a energia do misticismo mais dark.",
      products: createList(quantity),
    }
  }
}
