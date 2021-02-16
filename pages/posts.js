export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post, index) => <li key={index}>{post.title} - {post.content}</li>)}
    </ul>
  )
}
