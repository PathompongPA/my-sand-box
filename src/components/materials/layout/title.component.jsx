import { cva } from "class-variance-authority";

let box = cva(
    "font-bold",
    {
        variants: {
            variant: {
                "hero": "text-5xl text-gray-100",
                "primary": "text-4xl text-gray-300 ",
                "secondary": "text-2xl text-gray-400 ",
                "third": "text-xl text-gray-500",
                "ghost": "text-sm text-gray-700",
            }
        },
        defaultVariants: {
            variant: "primary"
        }

    }
)

export default function Title({ children, variant, className }) {
    return (
        <div className={box({ variant, className })}>{children}</div>
    )

};
