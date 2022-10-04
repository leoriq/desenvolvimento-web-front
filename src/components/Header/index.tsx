import { Link } from 'react-router-dom'
import { useUserContext } from '../../hooks/useUser'

function Header() {
  const { currentUser } = useUserContext()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2rem',
        gap: '2rem',
      }}
    >
      <h1>Pizzas Pra Já</h1>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/login">
          <h4>Login</h4>
        </Link>
        <Link to="/edit-user">
          <h4>Editar Usuário</h4>
        </Link>
        {currentUser?.master && (
          <>
            <Link to="/create-user">
              <h4>Cadastrar Usuário</h4>
            </Link>
            <Link to="/delete-user">
              <h4>Apagar Usuário</h4>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
