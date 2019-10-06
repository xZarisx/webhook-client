import React, { useState } from 'react'
import get from 'lodash.get'
import useWebsocket from './use-websocket'

const App = () => {
  const [message, setMessage] = useState('')
  const onChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }
  const [gameState, socket] = useWebsocket()

  return (<div>
    <button onClick={() => {
      socket.send(message)
    }} >button</button>
    <input type='text' onChange={onChange} value={message} />
    <div>
      {JSON.stringify(get(gameState, 'players', {}), null, 2)}
    </div>
  </div>)
}

export default App
