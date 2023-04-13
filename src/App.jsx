import './App.css'
import { useCatFact } from './services/hooks/useCatFact'
import { useCatImage } from './services/hooks/useCatImage'

const PREFIJO_IMAGEN_URL = 'https://cataas.com'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1> App de Gatitos</h1>
      <button onClick={handleClick}> Get new fact </button>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={`${PREFIJO_IMAGEN_URL}${imageUrl}`} alt={`Imagen estraida de la primera palagra de ${fact}`} />}
    </main>
  )
}
