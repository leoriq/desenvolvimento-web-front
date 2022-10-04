function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      style={{
        height: '2rem',
        width: '25rem',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
      }}
      {...props}
    />
  )
}

export default Input
