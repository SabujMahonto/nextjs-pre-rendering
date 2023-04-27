import useSWR from 'swr';

const fetcher = async(url)=>{
    const res = await fetch(url);
    if(!res.ok) throw new error('somethings went wrong');
    return res.json();
    // const data = await res.json();
    // return data;
}

export default function EidGifts() {

   const {data, error,isValidating}= useSWR("http://localhost:4000/eid-gifts",fetcher,)
   const isLoading = !data && !error && isValidating
   if(isLoading) return <h3>Loooading...</h3>
   if(error) return <h3>{error.message}</h3>
  return (
    <div>
        <h2>Eid Mubarok</h2>
        <p>You have received your gift.</p>
        {
            data.map(gift=>(
                <div key={gift.id}>
                    <h3>{gift.title}</h3>
                    <h3>{gift.price}</h3>
                </div>
            ))
        }
    </div>
  )
}
