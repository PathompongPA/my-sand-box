import { useEffect, useState } from "react"
import { padString } from "../utility";

export default function useClock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => { setTimeout(() => { setDate(new Date()) }, 1000); }, [date])
    let hour = padString(date.getHours(), 2)
    let minute = padString(date.getMinutes(), 2)
    let second = padString(date.getSeconds(), 2)
    return { hour, minute, second }
};
