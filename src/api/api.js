export const productsCall = async (quantity = 18) => {
  return await fetch(`/api/products/${quantity}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error)
      return null
    })
}

export const productCall = async (title) => {
  return await fetch(`/api/product/${title}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error)
      return null
    })
}

export const creatorListCall = async () => {
  return await fetch(`/api/creators`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error)
      return null
    })
}

export const checkCupom = async (cupomInput) => {
  return await fetch(`/api/check-cupom/${cupomInput}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error)
      return null
    })
}

export const checkShip = async (shipInput) => {
  return await fetch(`/api/check-ship/${shipInput}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error)
      return null
    })
}
