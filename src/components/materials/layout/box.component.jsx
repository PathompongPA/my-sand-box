import { cva } from "class-variance-authority"

let style = cva(
    "",
    {
        variants: {
            variant: {
            }
        }
    }
)
export default function Box({ children, variant, className, ...props }) {
    return (
        <div className={style({ variant, className })} {...props} >{children}</div>
    )

};
