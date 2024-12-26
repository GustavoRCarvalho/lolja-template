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
