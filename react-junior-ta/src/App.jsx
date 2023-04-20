import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//endpoints
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `/cat/says/:text?size=:size&color=:color
// /c/s/:text?s=:size&c=:color`
const CAT_PREFIX_IMAGE_URL =  'https://cataas.com'

// You're not allowed to use Axios, React Query, SWR, Apollo
function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect( () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)

      //first 3 words from API call
      const firstThreeWord = fact.split(' ',3).join(' ')
      //first word from API call
      const firstWord = fact.split(' ')[0]

      console.log(firstThreeWord)

      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const {url} = response
        // console.log(response)
        setImageUrl(url)
      })

    })
  }, [])

  return (
    <main className={{display: 'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',maxWidth: '800px',margin:'0 auto'}}> 
      <h1>Cat's app</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`}/>}
    </main>
  )
}

export default App
