import { useState } from "react"
import { useRevalidator } from "react-router-dom"
import { cookie, fetchApi } from "../../utility"

export default function useLoginPage() {
    let revalidator = useRevalidator()
    const [user, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [msgAlert, setMsgAlert] = useState(null)
    const validationUser = (user) => {
        if (!user) throw new Error("กรุณากรอก user")
    }
    const validationPassword = (password) => {
        if (!password) throw new Error("กรุณากรอก password")
    }
    const loginSuccess = () => {
        revalidator.revalidate() & event.clear.password() & event.clear.user()
    }

    let event = {
        submit: async () => {
            try {
                validationUser(user)
                validationPassword(password)
                let body = JSON.stringify({ user, password })
                const { isSuccess, error } = await fetchApi.ByJson("POST", "/user/login", body)
                if (!isSuccess) throw new Error(error)
                loginSuccess()
            } catch (error) {
                console.log(error);
                setMsgAlert(error.message)
            }
        },
        closeAlert: () => setMsgAlert(null),
        change: {
            user: (value) => setUserName(value),
            password: (value) => setPassword(value)
        },
        clear: {
            user: () => setUserName(null),
            password: () => setPassword(null)
        },
    }
    let isLogin = cookie.get("token") !== null
    let state = { user, password, isLogin, msgAlert }
    return { state, event, revalidator }
}