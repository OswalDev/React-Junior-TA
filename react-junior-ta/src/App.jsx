import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `/cat/says/:text?size=:size&color=:color
// /c/s/:text?s=:size&c=:color`

// You're not allowed to use Axios, React Query, SWR, Apollo
function App() {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  useEffect( () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)

      const firstWord = fact.split(' ')[0]
    })
  }, [])

  async function getImageResponse() {
    var str = fact.fact;
    const response = await fetch('https://cataas.com/cat/says/:'+{str})
    console.log(response)
    return response
  }

  return (
    <div className="App"> 
    <h1>Cat's app</h1>
      {fact && <p>{fact}</p>}
      <img src={image.url} alt=""/>
    </div>
  )
}

export default App
