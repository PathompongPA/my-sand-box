import { cva } from "class-variance-authority"

let style = cva(
    " p-2 rounded-4xl font-bold text-gray-300 hover:cursor-pointer hover:brightness-90 active:brightness-110 hover:scale-[.98] active:scale-100  duration-300",
    {
        variants: {
            variant: {
                "primary": "bg-gray-700 ",
                "secondary": "bg-gray-800",
                "ghost": "bg-none text-gray-500",
                "danger": "bg-red-800",
                "warning": "bg-yellow-700",
                "info": "bg-gray-400 text-gray-950",
            },
            size: {
                "xl": "text-2xl",
                "l": "text-xl ",
                "m": "text-sm",
            },
            animation: {
                ping: "animate-ping"
            }
        }
        , defaultVariants: {
            variant: "primary",
            size: "l"
        }
    }
)
export default function Button({ children, className, variant, size, animation, onClick, ...props }) {
    return <button className={style({ variant, size, animation, className })} onClick={onClick} {...props} >{children}</button>
};
