import { cva } from "class-variance-authority";
import Flex from "./flex.component";
import Button from "../button/button.component";

let style = cva(
    " fixed top-0 left-0 border w-screen h-screen flex flex-col justify-center items-center z-50 bg-black/50 ",
    {
        variants: {
            variant: {

            }
        }
    }
)
export default function Modal({ children, variant, className, onClose }) {
    return (
        <div className={style({ variant, className })} onClick={onClose} >
            {children}
        </div>
    )

};
