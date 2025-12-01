// Format price as Toman with Persian number formatting
export const formatPrice = (price) => {
  // Convert to Persian/Farsi digits using Intl.NumberFormat
  const formattedNumber = new Intl.NumberFormat('fa-IR').format(Math.round(price))
  return formattedNumber
}
