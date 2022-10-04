import { useState } from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { useUserContext } from '../../hooks/useUser'

function Login() {
  const { currentUser, login } = useUserContext()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    login(name, password)
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
        {currentUser ? (
          <h1>Já está logado</h1>
        ) : (
          <>
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
            <button onClick={handleSubmit}>Login</button>
          </>
        )}
      </div>
    </>
  )
}

export default Login
