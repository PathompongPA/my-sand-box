import { cva } from "class-variance-authority"

let style = cva(
    "flex gap-4 p-4 rounded-lg bg-gray-900 ",
    {
        variants: {
            variant: {
                "col": "flex-col",
                "row": "flex-row",
            },
            justify: {
                "start": " justify-start",
                "center": " justify-center",
                "end": " justify-end",
                "between": " justify-between ",
            },
            item: {
                start: "items-start",
                center: "items-center",
                end: "items-end",
            }
        },
        defaultVariants: {
            variant: "col",
            justify: "start",
            item: "center"
        }
    }
)
export default function Flex({ children, variant, justify, item, className }) {
    return <div className={style({ variant, justify, item, className })}>{children}</div>
};
