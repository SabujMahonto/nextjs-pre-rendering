import React from 'react'

export default function frameworkDetails({frames}) {
  
  const {id,title,core} = frames;
  return (
    <div>
      <h2>frameworkDetails</h2>
      <p>{id}-{title}-{core}</p>
    </div>
  )
}

export async function getServerSideProps(context){
    const {params} = context;
    const res = await fetch(`http://localhost:4000/frameworks/${params.frameId}`);
    const data = await res.json()
    return{
      props:{
        frames : data,
      }
    }
}