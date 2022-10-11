import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUser'
import { Ad } from '../../models/Ad'
import { Comment } from '../../models/Comment'
import api from '../../services/api'
import Input from '../Input'

function Post({ ad }: { ad: Ad }) {
  const { currentUser } = useUserContext()
  const [postComments, setPostComments] = useState<Comment[]>([])
  const [comment, setComment] = useState('')

  async function handleSubmit() {
    if (currentUser?.token) {
      const { data: newComment } = await api.post(
        `/comments`,
        { content: comment, ad_id: ad.id },
        {
          headers: { Authorization: `Bearer ${currentUser.token}` },
        }
      )
      setPostComments(
        postComments.concat({ user: { name: currentUser.name }, ...newComment })
      )
      setComment('')
    }
  }

  useEffect(() => {
    setPostComments(ad.comments)
  }, [ad])

  return (
    <div
      key={ad.id}
      style={{
        border: 'solid',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '2rem',
      }}
    >
      <h2>{ad.name}</h2>
      <p>{ad.user.name}</p>
      <p>{ad.description}</p>
      {ad.image && <img src={ad.image.url} alt={ad.name} />}
      <p>{ad.ingredients}</p>
      <p>{`R$ ${ad.value}`}</p>
      <h3>Comentários:</h3>
      {postComments.map((comment) => (
        <div key={comment.id} style={{ fontSize: '.75rem' }}>
          <p>{`${comment.user.name} disse: ${comment.content}`}</p>
        </div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <Input
          placeholder="Escreva seu comentário"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Post
