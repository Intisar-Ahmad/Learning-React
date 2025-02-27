import React, { useState } from 'react'
import liked from '../../public/like.svg'
import notLiked from '../../public/notLiked.svg'
function Like() {
  const [like,setLike] = useState(false);

  function liking() {
    setLike((like)=>!like);
  }

  return (
    <div>
  <button onClick={liking}><img src={like?liked:notLiked} alt="like" height={20}/></button>
    </div>
  )
}

export default Like
