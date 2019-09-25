import React, { useState } from 'react'
import useWebsocket from './use-websocket'

const App = () => {
  const [message, setMessage] = useState('')
  const onChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }
  const [messages, socket] = useWebsocket()
  console.log('Messages: ', messages)

  return (<div>
    <button onClick={() => {
      socket.send(message)
    }} >button</button>
    <input type='text' onChange={onChange} value={message} />
    <ul>
      {messages.map((message) => <li>{message}</li>)}
    </ul>
  </div>)
}

export default App
