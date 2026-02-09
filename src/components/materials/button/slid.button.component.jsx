
import { cva } from "class-variance-authority"

let buttonStyle = cva("flex flex-row p-1 gap-1 bg-gray-100 rounded-4xl hover:cursor-pointer select-none active:scale-110 duration-300 hover:scale-90 h-fit", {
    variants: {
        variant: {},
    }
})
let itemStyle = cva("text-blue-950 font-bold uppercase duration-300 h-fit p-1 px-2 rounded-4xl  shadow-2xl/50", {
    variants: {
        variant: {},
        active: {
            true: "bg-blue-900 text-white ",
            false: ""
        }
    }
})
export default function SlideButton({ defaultValue, options, onSelectOption }) {
    const toggleLanguage = () => {
        let nextPosition = options?.indexOf(defaultValue) + 1
        let isOutOf = nextPosition >= options?.length
        onSelectOption(isOutOf ? options[0] : options[nextPosition])
    }
    return (
        <button className={buttonStyle({})} onClick={toggleLanguage}>
            {options?.map((value, index) => {
                let active = value === defaultValue
                return <div className={itemStyle({ active })} key={index}>{value}</div>
            })}

        </button>
    )
};
