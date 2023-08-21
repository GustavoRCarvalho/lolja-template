import MOLETOMOVERSIZEDOFF1 from "./MOLETOMOVERSIZEDOFF1.png"
import MOLETOMOVERSIZEDOFF2 from "./MOLETOMOVERSIZEDOFF2.png"
import MOLETOMOVERSIZEDOFF3 from "./MOLETOMOVERSIZEDOFF3.png"

import MOLETOMPOLVO1 from "./MOLETOMPOLVO1.png"
import MOLETOMPOLVO2 from "./MOLETOMPOLVO2.png"
import MOLETOMPOLVO3 from "./MOLETOMPOLVO3.png"
import MOLETOMPOLVO4 from "./MOLETOMPOLVO4.png"
import MOLETOMPOLVO5 from "./MOLETOMPOLVO5.png"
import MOLETOMPOLVO6 from "./MOLETOMPOLVO6.png"

import MANGALONGACARINAEYES1 from "./MANGALONGACARINAEYES1.png"
import MANGALONGACARINAEYES2 from "./MANGALONGACARINAEYES2.png"
import MANGALONGACARINAEYES3 from "./MANGALONGACARINAEYES3.png"
import MANGALONGACARINAEYES4 from "./MANGALONGACARINAEYES4.png"
import MANGALONGACARINAEYES5 from "./MANGALONGACARINAEYES5.png"
import MANGALONGACARINAEYES6 from "./MANGALONGACARINAEYES6.png"

import MOLETOMPESADELO1 from "./MOLETOMPESADELO1.png"
import MOLETOMPESADELO2 from "./MOLETOMPESADELO2.png"
import MOLETOMPESADELO3 from "./MOLETOMPESADELO3.png"
import MOLETOMPESADELO4 from "./MOLETOMPESADELO4.png"
import MOLETOMPESADELO5 from "./MOLETOMPESADELO5.png"
import MOLETOMPESADELO6 from "./MOLETOMPESADELO6.png"

export const product = ({ title }) => {
  switch (title) {
    case "MOLETOM - POLVO":
      return {
        images: [
          MOLETOMPOLVO1,
          MOLETOMPOLVO2,
          MOLETOMPOLVO3,
          MOLETOMPOLVO4,
          MOLETOMPOLVO5,
          MOLETOMPOLVO6,
        ],
        title: "MOLETOM - POLVO",
        price: 199.9,
        salePrice: 159.9,
        salePorcent: `-${Math.round(100 - (159.9 * 100) / 199.9)}%`,
        installmentsPrice: ["6", 26.65],
        options: {
          cores: ["preto", "azul", "marrom"],
          tamanho: ["M", "G", "2G"],
          sexo: ["FEMININO", "MASCULINO"],
        },
        about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
      }
    case "MANGA LONGA - CARINAEYES":
      return {
        images: [
          MANGALONGACARINAEYES1,
          MANGALONGACARINAEYES2,
          MANGALONGACARINAEYES3,
          MANGALONGACARINAEYES4,
          MANGALONGACARINAEYES5,
          MANGALONGACARINAEYES6,
        ],
        title: "MANGA LONGA - CARINAEYES",
        price: 129.9,
        salePrice: 99.9,
        salePorcent: `-${Math.round(100 - (99.9 * 100) / 129.9)}%`,
        installmentsPrice: ["6", 16.65],
        options: {
          cores: ["verde", "amarelo", "preto"],
          tamanho: ["5 - 7 ANOS", "PP", "P", "M", "G"],
          sexo: ["FEMININO"],
        },
        about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
      }
    case "MOLETOM - PESADELO":
      return {
        images: [
          MOLETOMPESADELO1,
          MOLETOMPESADELO2,
          MOLETOMPESADELO3,
          MOLETOMPESADELO4,
          MOLETOMPESADELO5,
          MOLETOMPESADELO6,
        ],
        title: "MOLETOM - PESADELO",
        price: 239.9,
        salePrice: 179.9,
        salePorcent: `-${Math.round(100 - (179.9 * 100) / 239.9)}%`,
        installmentsPrice: ["6", 29.98],
        options: {
          cores: ["preto", "cinza", "branco"],
          tamanho: ["5 - 7 ANOS", "PP", "P", "M", "G", "2G", "3G", "4G"],
          sexo: ["FEMININO", "MASCULINO"],
        },
        about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
      }
    default:
      return {
        images: [
          MOLETOMOVERSIZEDOFF1,
          MOLETOMOVERSIZEDOFF2,
          MOLETOMOVERSIZEDOFF3,
        ],
        title: "MOLETOM - OVERSIZED OFF",
        price: 239.9,
        salePrice: 199.9,
        salePorcent: `-${Math.round(100 - (199.9 * 100) / 239.9)}%`,
        installmentsPrice: ["6", 33.32],
        options: {
          cores: ["preto", "branco"],
          tamanho: ["5 - 7 ANOS", "PP", "P", "M", "G", "2G", "3G", "4G"],
        },
        about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
      }
  }
}
