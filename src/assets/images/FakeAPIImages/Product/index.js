import moletombranco1 from "../Catalog/moletombranco1.png"
import moletombranco2 from "../Catalog/moletombranco2.png"

export const product = {
  images: [moletombranco1, moletombranco2, moletombranco1, moletombranco2],
  title: "MOLETOM OVERSIZED OFF WHITE",
  price: 239.9,
  salePrice: 199.9,
  salePorcent: `-${Math.round(100 - (199.9 * 100) / 239.9)}%`,
  installmentsPrice: ["6", 33.32],
  options: {
    cores: ["preto", "cinza", "branco"],
    tamanho: ["5 - 7 ANOS", "PP", "P", "M", "G", "2G", "3G", "4G"],
    sexo: ["FEMININO", "MASCULINO"],
  },
  about: `Você está prestes a adquirir um produto totalmente único e de qualidade. Nosso moletom é flanelado por dentro, por isso é muito mais quentinho e fofo, é uma peça de extrema qualidade, proporcionando conforto e estilo para te aquecer nesse inverno. Os moletons são unissex, possuem capuz e bolsos laterais... assim todos podem ficar quentinhos e formidáveis! Nossas estampas (formidáveis, é claro) são criadas e pensadas especialmente pra você, o processo de produção silkscreen é feito à base d'água (o que faz com que sua estampa nunca corra o risco de craquelar). O prazo de envio é de 15 (quinze) a 20 (vinte) dias úteis, não incluso o prazo dos correios ou transportadora. Esse prazo é referente à confecção e embalagem dos produtos. Arte: Davi Severiano`,
}
