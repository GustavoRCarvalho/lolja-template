export const moneyFormat = (value = 0) => {
  const brFormat = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
  return brFormat
}
