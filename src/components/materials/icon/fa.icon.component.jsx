import { cva } from "class-variance-authority"

let styleIcon = cva(
    'text-shadow-gray-500',
    {
        variants: {
            variant: {
                xmark: "fa-xmark",
                info: "fa-circle-info",
                warning: "fa-triangle-exclamation",
                ban: "fa-solid fa-ban"
            },
            animation: {
                spin: "animate-spin"
            },
            style: {
                solid: "fa-solid",
                regular: "fa-regular"
            }
        },
        defaultVariants: {
            style: "solid"
        }

    }

)
export default function Icon({ variant }) {
    return (< i className={styleIcon({ variant })}></ i>)
};
