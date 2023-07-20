import MOLETOMOVERSIZEDOFF1 from "./MOLETOMOVERSIZEDOFF1.png"
import MOLETOMOVERSIZEDOFF2 from "./MOLETOMOVERSIZEDOFF2.png"
import MOLETOMPOLVO1 from "./MOLETOMPOLVO1.png"
import MOLETOMPOLVO2 from "./MOLETOMPOLVO2.png"
import MANGALONGACARINAEYES1 from "./MANGALONGACARINAEYES1.png"
import MANGALONGACARINAEYES2 from "./MANGALONGACARINAEYES2.png"
import MOLETOMPESADELO1 from "./MOLETOMPESADELO1.png"
import MOLETOMPESADELO2 from "./MOLETOMPESADELO2.png"

const productsObjects = {
  obj1: {
    images: [MOLETOMOVERSIZEDOFF1, MOLETOMOVERSIZEDOFF2],
    title: "MOLETOM - OVERSIZED OFF",
    price: 239.9,
    salePrice: 199.9,
    salePorcent: `-${Math.round(100 - (199.9 * 100) / 239.9)}%`,
    installmentsPrice: ["6", 33.32],
    tamanhos: ["P", "M", "G", "2G"],
  },
  obj2: {
    images: [MOLETOMPOLVO1, MOLETOMPOLVO2],
    title: "MOLETOM - POLVO",
    price: 199.9,
    salePrice: 159.9,
    salePorcent: `-${Math.round(100 - (159.9 * 100) / 199.9)}%`,
    installmentsPrice: ["6", 26.65],
    tamanhos: ["P", "M", "G", "2G"],
  },
  obj3: {
    images: [MANGALONGACARINAEYES1, MANGALONGACARINAEYES2],
    title: "MANGA LONGA - CARINAEYES",
    price: 129.9,
    salePrice: 99.9,
    salePorcent: `-${Math.round(100 - (99.9 * 100) / 129.9)}%`,
    installmentsPrice: ["6", 16.65],
    tamanhos: ["P", "M", "G", "2G"],
  },
  obj4: {
    images: [MOLETOMPESADELO1, MOLETOMPESADELO2],
    title: "MOLETOM - PESADELO",
    price: 239.9,
    salePrice: 179.9,
    salePorcent: `-${Math.round(100 - (179.9 * 100) / 239.9)}%`,
    installmentsPrice: ["6", 33.32],
    tamanhos: ["P", "M", "G", "2G"],
  },
}

export function createList(quantity) {
  let array = Array.apply(null, Array(quantity)).map(() => {
    const number = Math.floor(Math.random() * 4)
    if (number === 0) {
      return productsObjects.obj1
    } else if (number === 1) {
      return productsObjects.obj2
    } else if (number === 2) {
      return productsObjects.obj3
    } else {
      return productsObjects.obj4
    }
  })

  return array
}

export const listProducts = {
  "old skull": createList(12),
  guaxinim: createList(5),
  webtvbrasileira: createList(3),
  keira: createList(8),
}

export const staticCatalogData = ({ name = "" }) => {
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
      totalPages: 5,
      filters: {
        categoria: [
          "camisetas",
          "moletons",
          "manga longa",
          "regata",
          "blusão",
          "blusão cinza",
          "raglan",
        ],
        cor: [
          "preto",
          "cinza",
          "branco",
          "marrom",
          "chumbo",
          "canela",
          "preto com branco",
          "preto com vermelho",
        ],
        tamanho: ["5 - 7 ANOS", "PPP", "PP", "P", "M", "G", "2G", "3G", "4G"],
        sexo: ["UNISSEX", "MASCULINO", "FEMININO"],
        preço: [39.9, 159.9],
        ordernar: [
          "MAIS RECENTES",
          "MAIS ANTIGOS",
          "MENOR PREÇO",
          "MAIOR PREÇO",
        ],
      },
    }
  } else {
    return {
      about:
        "Ela pode parecer colorida e alegre à primeira vista, mas ela é a mistura da primavera cheia de cor, com a energia do misticismo mais dark.",
      totalPages: 5,
      filters: {
        categoria: [
          "camisetas",
          "moletons",
          "manga longa",
          "regata",
          "blusão",
          "blusão cinza",
          "raglan",
        ],
        cor: [
          "preto",
          "cinza",
          "branco",
          "marrom",
          "chumbo",
          "canela",
          "preto com branco",
          "preto com vermelho",
        ],
        tamanho: ["5 - 7 ANOS", "PPP", "PP", "P", "M", "G", "2G", "3G", "4G"],
        sexo: ["UNISSEX", "MASCULINO", "FEMININO"],
        preço: [39.9, 159.9],
        ordernar: [
          "MAIS RECENTES",
          "MAIS ANTIGOS",
          "MENOR PREÇO",
          "MAIOR PREÇO",
        ],
      },
    }
  }
}
export const listCatalog = ({ name = "", quantity = 20 }) => {
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
    return createList(quantity)
  } else {
    return createList(quantity)
  }
}
