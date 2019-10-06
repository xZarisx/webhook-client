import { useState, useEffect } from 'react'

let socket
const useWebsocket = () => {

    const [gameState, setGameState] = useState([])


    // Listen for gameState
    useEffect(() => {
        // Create WebSocket connection.
        socket = new WebSocket('ws://localhost:8080/websocket');
        // Connection opened
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
        });

        socket.addEventListener('message', function (event) {
            setGameState(JSON.parse(event.data))
        });

        socket.addEventListener('close', function (event) {
            console.log('Lost connection from server');
        });
    }, [])
    return [gameState, socket]
}

export default useWebsocket
