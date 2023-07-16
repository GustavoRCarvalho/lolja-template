import moletombranco1 from "./moletombranco1.png"
import moletombranco2 from "./moletombranco2.png"

const obj = {
  images: [moletombranco1, moletombranco2],
  title: "MOLETOM OVERSIZED OFF WHITE",
  price: 239.9,
  salePrice: 199.9,
  salePorcent: `-${Math.round(100 - (199.9 * 100) / 239.9)}%`,
  installmentsPrice: ["6", 33.32],
  tamanhos: ["P", "M", "G", "2G"],
}

export function createList(quantity) {
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
      products: createList(quantity),
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
