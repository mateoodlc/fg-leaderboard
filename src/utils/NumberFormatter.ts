// This utility function formats a number to a string using the Spanish locale (es-ES).
const getFormattedNumber = (number: number) => new Intl.NumberFormat('es-ES').format(number);

export default getFormattedNumber;