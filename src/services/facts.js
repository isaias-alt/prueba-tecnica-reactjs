const DATO_ALEATORIO = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(DATO_ALEATORIO)
  const data = await res.json()
  const { fact } = data
  return fact
}
