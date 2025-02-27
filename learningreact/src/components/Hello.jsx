import React from 'react'

function Hello({username,text}) {
  return (
    <div className={`bg-green-300 ${text}`}>
      Hello {username}
    </div>
  )
}

export default Hello
