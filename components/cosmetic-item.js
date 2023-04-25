import React from 'react'

function CosItem({cosmetic}) {
  return (
    <div>
        <h3>{cosmetic.id}--{cosmetic.title}</h3>
        <h4>{cosmetic.price}</h4>
    </div>
  )
}

export default CosItem