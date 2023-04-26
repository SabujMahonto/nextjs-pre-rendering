import React from 'react'

export default function Framework({frameworks}) {
    
  return (
    <div>
        <h2>All Framework</h2>
        {
        frameworks.map(framework =>(
            
            <div key={framework.id}>
            <h3>{framework.id}-{framework.title},-{framework.core}</h3>
            </div>
        ))

        }
    </div>
  )
}

export async function getServerSideProps(){
    const res = await fetch("http://localhost:4000/frameworks");
    const data = await res.json();

    return{
        props:{
            frameworks : data,
        }
    }
}