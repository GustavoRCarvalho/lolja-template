import MOLETOMOVERSIZEDOFF1 from "../Product/MOLETOMOVERSIZEDOFF1.png"
import MOLETOMOVERSIZEDOFF2 from "../Product/MOLETOMOVERSIZEDOFF2.png"
import MOLETOMPOLVO1 from "../Product/MOLETOMPOLVO1.png"
import MOLETOMPOLVO2 from "../Product/MOLETOMPOLVO2.png"
import MANGALONGACARINAEYES1 from "../Product/MANGALONGACARINAEYES1.png"
import MANGALONGACARINAEYES2 from "../Product/MANGALONGACARINAEYES2.png"
import MOLETOMPESADELO1 from "../Product/MOLETOMPESADELO1.png"
import MOLETOMPESADELO2 from "../Product/MOLETOMPESADELO2.png"
import MOLETOMPRETOORIENTALDEATH1 from "../Product/MOLETOMPRETOORIENTALDEATH1.png"
import MOLETOMPRETOORIENTALDEATH2 from "../Product/MOLETOMPRETOORIENTALDEATH2.png"
import CAMISETAOVERSIZEDPRETAODIN1 from "../Product/CAMISETAOVERSIZEDPRETAODIN1.png"
import CAMISETAOVERSIZEDPRETAODIN2 from "../Product/CAMISETAOVERSIZEDPRETAODIN2.png"
import MOLETOMPRETOGATITO1 from "../Product/MOLETOMPRETOGATITO1.png"
import MOLETOMPRETOGATITO2 from "../Product/MOLETOMPRETOGATITO2.png"
import MOLETOMBASICOFULLPRINTHELLOKITTYROCKER1 from "../Product/MOLETOMBASICOFULLPRINTHELLOKITTYROCKER1.png"
import MOLETOMBASICOFULLPRINTHELLOKITTYROCKER2 from "../Product/MOLETOMBASICOFULLPRINTHELLOKITTYROCKER2.png"

const productsObjects = {
  1: {
    images: [MOLETOMOVERSIZEDOFF1, MOLETOMOVERSIZEDOFF2],
    title: "MOLETOM - OVERSIZED OFF",
    price: 239.9,
    salePrice: 199.9,
    salePorcent: `-${Math.round(100 - (199.9 * 100) / 239.9)}%`,
    installmentsPrice: ["6", 33.32],
    tamanhos: ["P", "M", "G", "2G"],
  },
  2: {
    images: [MOLETOMPOLVO1, MOLETOMPOLVO2],
    title: "MOLETOM - POLVO",
    price: 199.9,
    salePrice: 159.9,
    salePorcent: `-${Math.round(100 - (159.9 * 100) / 199.9)}%`,
    installmentsPrice: ["6", 26.65],
    tamanhos: ["P", "M", "G", "2G"],
  },
  3: {
    images: [MANGALONGACARINAEYES1, MANGALONGACARINAEYES2],
    title: "MANGA LONGA - CARINAEYES",
    price: 129.9,
    salePrice: 99.9,
    salePorcent: `-${Math.round(100 - (99.9 * 100) / 129.9)}%`,
    installmentsPrice: ["6", 16.65],
    tamanhos: ["P", "M", "G", "2G"],
  },
  4: {
    images: [MOLETOMPESADELO1, MOLETOMPESADELO2],
    title: "MOLETOM - PESADELO",
    price: 239.9,
    salePrice: 179.9,
    salePorcent: `-${Math.round(100 - (179.9 * 100) / 239.9)}%`,
    installmentsPrice: ["6", 33.32],
    tamanhos: ["P", "M", "G", "2G"],
  },
  5: {
    images: [MOLETOMPRETOORIENTALDEATH1, MOLETOMPRETOORIENTALDEATH2],
    title: "MOLETOM PRETO - ORIENTAL DEATH",
    price: 199.9,
    salePrice: 159.9,
    salePorcent: `-${Math.round(100 - (159.9 * 100) / 199.9)}%`,
    installmentsPrice: ["6", 33.32],
    tamanhos: ["PP", "P", "M", "G", "2G"],
  },
  6: {
    images: [CAMISETAOVERSIZEDPRETAODIN1, CAMISETAOVERSIZEDPRETAODIN2],
    title: "CAMISETA OVERSIZED PRETA - ODIN",
    price: 189.9,
    salePrice: 119.9,
    salePorcent: `-${Math.round(100 - (119.9 * 100) / 189.9)}%`,
    installmentsPrice: ["6", 19.98],
    tamanhos: ["M", "G", "2G", "4G"],
  },
  7: {
    images: [MOLETOMPRETOGATITO1, MOLETOMPRETOGATITO2],
    title: "MOLETOM PRETO - GATITO",
    price: 199.9,
    salePrice: 159.9,
    salePorcent: `-${Math.round(100 - (159.9 * 100) / 199.9)}%`,
    installmentsPrice: ["6", 26.65],
    tamanhos: ["M", "G", "2G", "4G"],
  },
  8: {
    images: [
      MOLETOMBASICOFULLPRINTHELLOKITTYROCKER1,
      MOLETOMBASICOFULLPRINTHELLOKITTYROCKER2,
    ],
    title: "MOLETOM BÁSICO FULL PRINT - HELLO KITTY ROCKER",
    price: 249.9,
    salePrice: 219.9,
    salePorcent: `-${Math.round(100 - (219.9 * 100) / 249.9)}%`,
    installmentsPrice: ["6", 36.65],
    tamanhos: ["PP", "M", "G", "2G"],
  },
}

export function createList(quantity) {
  let array = Array.apply(null, Array(quantity)).map(() => {
    const number = Math.ceil(Math.random() * 8)

    return productsObjects[number]
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
  const about = [
    "calango",
    "gabi",
    "luba",
    "castro",
    "nostalgia",
    "felps",
    "orichinho",
    "matt",
    "inutilismo",
  ].includes(name)
    ? ""
    : "Ela pode parecer colorida e alegre à primeira vista, mas ela é a mistura da primavera cheia de cor, com a energia do misticismo mais dark."

  return {
    about: about,
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
      preço: [39.9, 219.9],
      ordernar: ["MAIS RECENTES", "MAIS ANTIGOS", "MENOR PREÇO", "MAIOR PREÇO"],
    },
  }
}
