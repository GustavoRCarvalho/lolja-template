import MOLETOMOVERSIZEDOFF1 from "./MOLETOMOVERSIZEDOFF1.png"
import MOLETOMOVERSIZEDOFF2 from "./MOLETOMOVERSIZEDOFF2.png"
import MOLETOMOVERSIZEDOFF3 from "./MOLETOMOVERSIZEDOFF3.png"

import MOLETOMPRETOORIENTALDEATH1 from "./MOLETOMPRETOORIENTALDEATH1.png"
import MOLETOMPRETOORIENTALDEATH2 from "./MOLETOMPRETOORIENTALDEATH2.png"
import MOLETOMPRETOORIENTALDEATH3 from "./MOLETOMPRETOORIENTALDEATH3.png"
import MOLETOMPRETOORIENTALDEATH4 from "./MOLETOMPRETOORIENTALDEATH4.png"

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

import CAMISETAOVERSIZEDPRETAODIN1 from "./CAMISETAOVERSIZEDPRETAODIN1.png"
import CAMISETAOVERSIZEDPRETAODIN2 from "./CAMISETAOVERSIZEDPRETAODIN2.png"
import CAMISETAOVERSIZEDPRETAODIN3 from "./CAMISETAOVERSIZEDPRETAODIN3.png"
import CAMISETAOVERSIZEDPRETAODIN4 from "./CAMISETAOVERSIZEDPRETAODIN4.png"
import CAMISETAOVERSIZEDPRETAODIN5 from "./CAMISETAOVERSIZEDPRETAODIN5.png"

import MOLETOMPRETOGATITO1 from "./MOLETOMPRETOGATITO1.png"
import MOLETOMPRETOGATITO2 from "./MOLETOMPRETOGATITO2.png"
import MOLETOMPRETOGATITO3 from "./MOLETOMPRETOGATITO3.png"
import MOLETOMPRETOGATITO4 from "./MOLETOMPRETOGATITO4.png"
import MOLETOMPRETOGATITO5 from "./MOLETOMPRETOGATITO5.png"

import MOLETOMBASICOFULLPRINTHELLOKITTYROCKER1 from "./MOLETOMBASICOFULLPRINTHELLOKITTYROCKER1.png"
import MOLETOMBASICOFULLPRINTHELLOKITTYROCKER2 from "./MOLETOMBASICOFULLPRINTHELLOKITTYROCKER2.png"
import MOLETOMBASICOFULLPRINTHELLOKITTYROCKER3 from "./MOLETOMBASICOFULLPRINTHELLOKITTYROCKER3.png"
import MOLETOMBASICOFULLPRINTHELLOKITTYROCKER4 from "./MOLETOMBASICOFULLPRINTHELLOKITTYROCKER4.png"
import MOLETOMBASICOFULLPRINTHELLOKITTYROCKER5 from "./MOLETOMBASICOFULLPRINTHELLOKITTYROCKER5.png"

export const product = ({ title }) => {
  switch (title) {
    case "MOLETOM BÁSICO FULL PRINT - HELLO KITTY ROCKER":
      return {
        images: [
          MOLETOMBASICOFULLPRINTHELLOKITTYROCKER1,
          MOLETOMBASICOFULLPRINTHELLOKITTYROCKER2,
          MOLETOMBASICOFULLPRINTHELLOKITTYROCKER3,
          MOLETOMBASICOFULLPRINTHELLOKITTYROCKER4,
          MOLETOMBASICOFULLPRINTHELLOKITTYROCKER5,
        ],
        title: "MOLETOM BÁSICO FULL PRINT - HELLO KITTY ROCKER",
        price: 249.9,
        salePrice: 219.9,
        salePorcent: `-${Math.round(100 - (219.9 * 100) / 249.9)}%`,
        installmentsPrice: ["6", 36.65],
        options: {
          tamanhos: ["M", "G", "2G", "4G"],
          sexo: ["FEMININO", "MASCULINO"],
        },
        about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
      }
    case "MOLETOM PRETO - GATITO":
      return {
        images: [
          MOLETOMPRETOGATITO1,
          MOLETOMPRETOGATITO2,
          MOLETOMPRETOGATITO3,
          MOLETOMPRETOGATITO4,
          MOLETOMPRETOGATITO5,
        ],
        title: "MOLETOM PRETO - GATITO",
        price: 199.9,
        salePrice: 159.9,
        salePorcent: `-${Math.round(100 - (159.9 * 100) / 199.9)}%`,
        installmentsPrice: ["6", 26.65],
        options: {
          tamanhos: ["M", "G", "2G", "4G"],
          sexo: ["FEMININO", "MASCULINO"],
        },
        about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
      }
    case "CAMISETA OVERSIZED PRETA - ODIN":
      return {
        images: [
          CAMISETAOVERSIZEDPRETAODIN1,
          CAMISETAOVERSIZEDPRETAODIN2,
          CAMISETAOVERSIZEDPRETAODIN3,
          CAMISETAOVERSIZEDPRETAODIN4,
          CAMISETAOVERSIZEDPRETAODIN5,
        ],
        title: "CAMISETA OVERSIZED PRETA - ODIN",
        price: 199.9,
        salePrice: 159.9,
        salePorcent: `-${Math.round(100 - (159.9 * 100) / 199.9)}%`,
        installmentsPrice: ["6", 26.65],
        options: {
          tamanhos: ["M", "G", "2G", "4G"],
          sexo: ["FEMININO", "MASCULINO"],
        },
        about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
      }
    case "MOLETOM PRETO - ORIENTAL DEATH":
      return {
        images: [
          MOLETOMPRETOORIENTALDEATH1,
          MOLETOMPRETOORIENTALDEATH2,
          MOLETOMPRETOORIENTALDEATH3,
          MOLETOMPRETOORIENTALDEATH4,
        ],
        title: "MOLETOM PRETO - ORIENTAL DEATH",
        price: 199.9,
        salePrice: 159.9,
        salePorcent: `-${Math.round(100 - (159.9 * 100) / 199.9)}%`,
        installmentsPrice: ["6", 26.65],
        options: {
          tamanhos: ["PP", "P", "M", "G", "2G"],
          sexo: ["FEMININO", "MASCULINO"],
        },
        about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
      }
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
