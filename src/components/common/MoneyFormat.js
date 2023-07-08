export const moneyFormat = (value) => {
  const brFormat = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
  return brFormat
}
