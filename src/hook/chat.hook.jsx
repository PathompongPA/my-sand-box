import { useEffect, useState } from "react"
import useSocket from "./socket.hook"


export default function useChat() {
    const [chats, setChats] = useState([])
    const [message, setMessage] = useState(null)
    const [myId, setMyId] = useState(null)
    let { socket } = useSocket()
    let sendMessage = () => {
        socket.emit("chat:send", message)
        setMessage(null)
    }

    useEffect(() => {
        setMyId(socket.id)
        console.log(
            "rooms : ",
            socket.rooms
        );
        socket.on("chat:receive", (chat) => setChats((state) => [...state, chat]))
    }, [socket])

    const changeMessage = (msg) => setMessage(msg)
    return { state: { chats, myId, message }, event: { sendMessage, changeMessage } }
};
