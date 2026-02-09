import { useRevalidator } from "react-router-dom"
import { cookie } from "../../utility"

export default function useHomePage() {
    let revalidator = useRevalidator()
    const logout = () => { cookie.clear(), revalidator.revalidate() }
    let event = { logout }
    return { event }

};

