import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
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
  return { imageUrl }
}
