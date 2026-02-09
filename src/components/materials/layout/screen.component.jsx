import { cva } from "class-variance-authority"

let style = cva(
    "flex flex-col justify-center items-center w-full h-screen ",
    {
        variants: {
            variant: {

            }
        }
    }
)
export default function Screen({ children, variant, className }) {
    return <div className={style({ variant, className })}>{children}</div>
};
