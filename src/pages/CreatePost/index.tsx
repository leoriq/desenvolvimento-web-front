import { useState } from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { useUserContext } from '../../hooks/useUser'
import api from '../../services/api'

function CreatePost() {
  const { currentUser } = useUserContext()

  const [value, setValue] = useState(NaN)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [image, setImage] = useState<File | null>()

  async function handleSubmit() {
    if (!currentUser?.token) {
      alert('Não autorizado')
      return
    }

    var imageId = undefined
    if (image) {
      var formData = new FormData()
      formData.append('file', image)

      imageId = (
        await api.post('/files', formData, {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
      ).data.id
    }

    const post = {
      value,
      name,
      image_id: imageId,
      description,
      ingredients,
    }
    api.post('/ads', post, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
  }

  return (
    <>
      <Header />
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          margin: '4rem 0',
        }}
      >
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Input
          onChange={(e) => setDescription(e.target.value)}
          type="imageId"
          placeholder="Descrição"
        />
        <Input
          onChange={(e) => setIngredients(e.target.value)}
          type="imageId"
          placeholder="Ingredientes (separados por vírgula)"
        />
        <Input
          onChange={(e) => setValue(parseFloat(e.target.value))}
          type="text"
          placeholder="Valor"
        />
        <input type="file" onChange={(e) => setImage(e.target.files?.[0])} />
        <button onClick={handleSubmit}>Salvar</button>
      </div>
    </>
  )
}

export default CreatePost
