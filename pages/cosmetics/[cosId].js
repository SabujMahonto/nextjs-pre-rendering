import React from 'react'

export default function cosmeticDetails({cos}) {
    console.log(cos);
  return (
    <div>
        <h2>Cosmetic details by Id</h2>
        <h3>{cos.id}---- {cos.title}</h3>
        <h4>{cos.price}</h4>
    </div>
  )
}
export async function getStaticPaths(){
    return{
        paths :[
          {params:{cosId:"1"}},
        ],
        
        fallback : "blocking",
      }
}

export async function getStaticProps(context){
    const {params} = context;
    const res = await fetch(`http://localhost:4000/cosmetics/${params.cosId}`);
    const data = await res.json();
    return{
        props:{
            cos:data,
        },
        revalidate:5,
    }
}
