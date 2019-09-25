import { useState, useEffect } from 'react'

let socket
const useWebsocket = () => {

    const [messages, setMessages] = useState([])


    // Listen for messages
    useEffect(() => {
        // Create WebSocket connection.
        socket = new WebSocket('ws://localhost:8080/websocket');
        // Connection opened
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
        });

        socket.addEventListener('message', function (event) {
            setMessages(JSON.parse(event.data))
        });

        socket.addEventListener('close', function (event) {
            console.log('Lost connection from server');
        });
    }, [])
    return [messages, socket]
}

export default useWebsocket
