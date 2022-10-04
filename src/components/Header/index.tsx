function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2rem',
      }}
    >
      <h1>Pizzas Pra Já</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <h4>Login</h4>
        <h4>Editar Usuário</h4>
      </div>
    </div>
  )
}

export default Header
