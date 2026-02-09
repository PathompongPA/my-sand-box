import { cva } from "class-variance-authority"

let style = cva(
    " h-fit w-fit p-4 text-xl font-bold border-2 border-gray-800 text-gray-400 rounded-lg duration-300",
    {
        variants: {
            variant: {
            }
        }
    }
)
export default function InputText({ children, variant, onChange, onFocus, value, type = "text" }) {
    return (
        <input className={style({ variant })} type={type} name={children} onChange={(e) => onChange(e.target.value)} onFocus={onFocus} placeholder={children} value={value || ""} />
    )

};
