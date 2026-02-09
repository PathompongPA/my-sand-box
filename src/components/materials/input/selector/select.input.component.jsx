import { cva } from "class-variance-authority";
import { useState } from "react";

let containerStyle = cva(
    " relative h-fit w-fit  transition-all duration-500 rounded-4xl ",
    {
        variants: {
            variant: {}
        }
    }
)

let btnChangeLanguageStyle = cva(
    " text-blue-1 text-base font-bold uppercase rounded-4xl shadow-2xl p-2 px-4 gap-2 w-21 flex flex-row justify-center items-center lg:hover:bg-blue-1 lg:hover:text-white lg:hover:cursor-pointer  duration-600 shadow-lg/50 lg:hover:scale-90 active:scale-110 ",
    {
        variants: {
            variant: {},
            isOpenDropDown: {
                true: " bg-blue-1 text-white",
                false: " bg-white"
            }
        }
    }
)

let iconDownStyle = cva(
    "fa-solid fa-chevron-down  transition-all duration-500",
    {
        variants: {
            variant: {},
            isOpenDropDown: {
                true: "rotate-180",
            }
        }
    }
)

let optionStyle = cva(
    " absolute top-full left-0 mt-2 px-2 opacity-25  max-h-0 overflow-hidden bg-gray-100 w-full flex flex-col gap-1 rounded-2xl  shadow-lg/50  transition-all duration-300",
    {
        variants: {
            variant: {},
            isOpenDropDown: {
                true: " py-2  max-h-50 opacity-100",
                false: ""
            }
        }
    }
)
let itemStyle = cva(
    " text-blue-1 rounded-2xl p-1 font-bold uppercase lg:hover:cursor-pointer  lg:hover:scale-90 active:scale-105 duration-300",
    {
        variants: {
            variant: {},
            active: {
                true: "bg-blue-1 text-white hover:bg-blue-1 hover:text-white ",
                false: "   hover:bg-blue-950/10 hover:text-blue-9550   "
            }
        }
    }
)
export default function InputSelect({ defaultValue, options, onSelectOption, variant }) {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    const toggleDropDown = () => { setIsOpenDropDown(!isOpenDropDown) }
    return (
        <div className={containerStyle({ variant })}>
            <button className={btnChangeLanguageStyle({ variant, isOpenDropDown })} onClick={toggleDropDown} >
                <div className=""> {defaultValue} </div>
                <i className={iconDownStyle({ isOpenDropDown })}></i>
            </button>
            <div className={optionStyle({ variant, isOpenDropDown })}>
                {options?.map((value, key) => {
                    let active = value === defaultValue
                    return <button className={itemStyle({ variant, active })} value={value} key={key} onClick={(e) => { onSelectOption(e.target.value); toggleDropDown() }}>{value}</button>
                }
                )}
            </div>
        </div>
    )
};
