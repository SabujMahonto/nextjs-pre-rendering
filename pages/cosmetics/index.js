import CosItem from "@/components/cosmetic-item";

export default function Cosmetic({cosmetics}) {
  return (
    <div>
      <h2>Cosmetic List </h2>

      {
        cosmetics.map(cosmetic =>(
          // <div key={cosmetic.id}>
          //   <h2>{cosmetic.id}-{cosmetic.title}</h2>
          //   <h4>{cosmetic.price}</h4>
          // </div>
          <CosItem key={cosmetic.id} cosmetic={cosmetic}/>
        ))
      }
    </div>
  )
}

export async function getStaticProps(){
    const res = await fetch("http://localhost:4000/cosmetics");
    const data = await res.json();
    
    return{
        props:{
            cosmetics : data,
        },
        revalidate : 5,
    }
    
}