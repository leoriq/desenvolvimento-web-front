import { useState } from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { useUserContext } from '../../hooks/useUser'
import api from '../../services/api'

function EditUser() {
  const { currentUser } = useUserContext()

  const [id, setId] = useState(NaN)
  const [name, setName] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleSubmit() {
    if (password !== confirmPassword) {
      alert('Senhas não conferem')
      return
    }
    if (!currentUser?.master || !currentUser?.token) {
      alert('Não autorizado')
      return
    }

    const user = {
      id,
      name,
      password,
      oldPassword,
      confirmPassword,
    }
    api.put('/users', user, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
  }

  if (!currentUser?.master) {
    return <h1>Not allowed</h1>
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
          type="text"
          placeholder="ID"
        />
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Input
          onChange={(e) => setOldPassword(e.target.value)}
          type="password"
          placeholder="Senha Antiga"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha Nova"
        />
        <Input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirmar Senha"
        />
        <button onClick={handleSubmit}>Salvar</button>
      </div>
    </>
  )
}

export default EditUser
