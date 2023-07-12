import moletombranco1 from "../Catalog/moletombranco1.png"
import moletombranco2 from "../Catalog/moletombranco2.png"

export const product = {
  images: [moletombranco1, moletombranco2, moletombranco1, moletombranco2],
  title: "MOLETOM OVERSIZED OFF WHITE",
  price: 239,
  salePrice: 199,
  salePorcent: `-${parseInt(100 - (199 * 100) / 239.9)}%`,
  installmentsPrice: ["6", 33.32],
  options: {
    tamanho: ["5 - 7 ANOS", "PP", "P", "M", "G", "2G", "3G", "4G"],
    sexo: ["FEMININO", "MASCULINO"],
  },
}
