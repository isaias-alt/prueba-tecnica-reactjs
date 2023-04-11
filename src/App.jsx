import { useEffect, useState } from 'react'
import './App.css'

const DATO_ALEATORIO = 'https://catfact.ninja/fact'
const PREFIJO_IMAGEN_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(DATO_ALEATORIO)
      .then((res) => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const primeraPalabra = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${primeraPalabra}?size=50&color=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1> App de Gatitos</h1>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={`${PREFIJO_IMAGEN_URL}${imageUrl}`} alt={`Imagen estraida de la primera palagra de ${fact}`} />}
    </main>
  )
}
