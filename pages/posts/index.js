import PostItem from "@/components/post-item";



function Post({posts}) {    
  return (
    <div>
        <h1 className="text-6xl text-center">Post</h1>

        {
            posts.map(post =>(
                <PostItem post ={post} key={post.id}/>
            ))
        }
    </div>
  )
}

export default Post;

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props:{
            posts : data,
        }
    }
}