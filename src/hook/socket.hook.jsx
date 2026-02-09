import { useEffect } from "react"
import { cookie } from "../utility"
import { io } from "socket.io-client"

let socket = io("http://localhost", {
    autoConnect: true, withCredentials: true
})

export default function useSocket() {
    useEffect(() => {
        socket.connect()
        socket.emit("login", cookie.get("token"))
        return () => {
            socket.off("chat:receive")
            socket.disconnect()
        }
    }, [])

    return { socket }
};
