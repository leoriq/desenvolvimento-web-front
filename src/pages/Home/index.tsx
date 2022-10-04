import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Ad } from '../../models/Ad'
import api from '../../services/api'

function Home() {
  const [ads, setAds] = useState<Ad[]>()

  useEffect(() => {
    api.get('/ads').then((response) => {
      setAds(response.data)
    })
  }, [])

  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {ads?.map((ad) => (
          <div key={ad.id}>
            <h2>{ad.name}</h2>
            <p>{ad.user.name}</p>
            <p>{ad.description}</p>
            {ad.image && <img src={ad.image.url} alt={ad.name} />}
            <p>{ad.ingredients}</p>
            <p>{`R$ ${ad.value}`}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
