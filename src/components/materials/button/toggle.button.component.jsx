import { cva } from "class-variance-authority"

let buttonStyle = cva("flex flex-row justify-center items-center p-1  bg-gray-100 rounded-xl hover:cursor-pointer select-none active:scale-110  hover:scale-90 hover:text-white hover:bg-blue-900 group duration-300 h-fit ", {
    variants: {
        variant: {},
    }
})

let itemStyle = cva("text-blue-950 font-bold uppercase  h-fit p-1 px-2 rounded-4xl  shadow-2xl/50 group-hover:text-white duration-300 ", {
    variants: {
        variant: {},
        active: {
            true: "bg-blue-900 text-white ",
            false: ""
        }
    }
})
let iconStyle = cva(" fa-solid fa-earth-americas text-blue-900 fa-lg group-hover:text-white duration-300 ", {
    variants: {
        variant: {},
        active: {
            true: "bg-blue-900 text-white ",
            false: ""
        }
    }
})

export default function ToggleButton({ defaultValue, options, onSelectOption }) {
    const toggleLanguage = () => {
        let nextPosition = options?.indexOf(defaultValue) + 1
        let isOutOf = nextPosition >= options?.length
        onSelectOption(isOutOf ? options[0] : options[nextPosition])
    }
    return (
        <button className={buttonStyle({})} onClick={toggleLanguage}>
            <div className={itemStyle()}>{defaultValue}</div>
            <i className={iconStyle()}></i>
        </button>
    )
};
