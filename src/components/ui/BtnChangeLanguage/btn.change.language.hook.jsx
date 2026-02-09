import { useRef } from "react"
import { i18n } from "../../../i18n"

export default function useBtnChangeLanguage() {
    let refs = {
        dropDown: useRef(null),
        iconDown: useRef(null),
        btnChangeLanguage: useRef(null),
    }

    const toggleDropDown = () => {
        refs.dropDown.current.classList.toggle("h-fit")
        refs.dropDown.current.classList.toggle("p-4")
        refs.iconDown.current.classList.toggle("rotate-180")
        refs.btnChangeLanguage.current.classList.toggle("bg-gray-500")
    }

    const onChangeLanguage = (newLanguage) => {
        toggleDropDown()
        i18n.changeLanguage(newLanguage)
    }

    return {
        e: {
            onChangeLanguage,
            onToggleDropDown: toggleDropDown
        },
        refs
    }
}