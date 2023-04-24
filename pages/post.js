

function Post({posts}) {
  return (
    <div>
        <h2>Posts</h2>
        {
         posts.map(post =>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
         ))
        }
    </div>
  )
}

export default Post
export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return{
        props:{
            posts: data,
        }
    }
}