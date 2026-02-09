import { cva } from "class-variance-authority"

let style = cva(
    " w-full border text-white",
    {
        variants: {
            variant: {
                "desktop": " max-w-267.5",
                "mobile": " max-w-225",
            }

        }, defaultVariants: {
            variant: "desktop"

        }
    })
export default function Container({ children, variant, className, ...props }) {
    return (<div className={style({ variant, className })} {...props}>{children}</div>)
};
