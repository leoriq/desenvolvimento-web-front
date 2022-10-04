import { useState } from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { useUserContext } from '../../hooks/useUser'
import api from '../../services/api'

function DeleteUser() {
  const { currentUser } = useUserContext()

  const [id, setId] = useState(NaN)

  function handleSubmit() {
    if (!currentUser?.token) {
      alert('Não autorizado')
      return
    }

    api.delete(`/users/${id}`, {
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
          onChange={(e) => setId(parseInt(e.target.value))}
          type="number"
          placeholder="ID"
        />
        <button onClick={handleSubmit}>Salvar</button>
      </div>
    </>
  )
}

export default DeleteUser
