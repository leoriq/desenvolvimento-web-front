import { useEffect, useMemo, useState } from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { Ad } from '../../models/Ad'
import api from '../../services/api'

function Home() {
  const [ads, setAds] = useState<Ad[]>()
  const [search, setSearch] = useState('')

  useEffect(() => {
    api.get('/ads').then((response) => {
      setAds(response.data)
    })
  }, [])

  const filteredAds = useMemo(() => {
    if (!search) {
      return ads
    }
    const searchItems = search.toLowerCase().replace(/\s/g, '').split(',')

    return ads?.filter((ad) => {
      const ingredientList = ad.ingredients
        .toLowerCase()
        .replace(/\s/g, '')
        .split(',')

      return searchItems.every((item) => ingredientList.includes(item))
    })
  }, [ads, search])

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
        <form>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar (palavras inteiras separadas por vírgula)"
            type="search"
          />
        </form>
        {filteredAds?.map((ad) => (
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
