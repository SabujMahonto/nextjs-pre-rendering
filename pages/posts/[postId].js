// import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
  // const router = useRouter();
  // if(router.isFallback){
  //   return <p>Loading ....Loading....</p>
  // }

  return (
    <div>
      <h2>
        {post.id} - {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths(){

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();
  // const paths = data.map((post)=>{
  //   return{
  //     params:{
  //       postId :`${post.id}`
  //     },
  //   }
  // })

  return{
    // paths,
    paths :[
      {params:{postId : "1"}},
      {params:{postId : "3"}},
      {params:{postId : "4"}},
      {params:{postId : "5"}},
     
    ],
    // fallback : false,
    // fallback : true,
    fallback : "blocking",
  }
}


export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}