import { useState } from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { useUserContext } from '../../hooks/useUser'
import api from '../../services/api'

function CreateUser() {
  const { currentUser } = useUserContext()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    if (!currentUser?.token) {
      alert('Não autorizado')
      return
    }

    const user = {
      name,
      password,
    }
    api.post('/users', user, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
  }

  if (!currentUser?.master) {
    return <h1>Não autorizado</h1>
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
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
        />
        <button onClick={handleSubmit}>Salvar</button>
      </div>
    </>
  )
}

export default CreateUser
