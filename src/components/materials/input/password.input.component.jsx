import { useState } from "react";
import Box from "../layout/box.component";
import InputText from "./text.input.component";
import { cva } from "class-variance-authority";
import Button from "../button/button.component";

let btnEye = cva(
    "text-2xl text-gray-400 font-black hover:cursor-pointer hover:brightness-150",
    {
        variants: {
            isHide: {
                true: "fa-regular fa-eye-slash",
                false: "fa-solid fa-eye"
            }
        }
    }

)
export default function InputPassword({ children, onChange, value }) {
    const [isHide, setHide] = useState(true)
    const toggleHidePassword = () => setHide(!isHide)
    return (
        <Box className={"relative"} >
            <InputText type={isHide ? "password" : "text"} onChange={onChange} value={value}>{children}</InputText>
            {value &&
                <Box className={" absolute top-0 right-0 h-full flex p-4 justify-center items-center "}>
                    <Button variant={"ghost"}>
                        <i className={btnEye({ isHide })} onClick={toggleHidePassword}></i>
                    </Button>
                </Box>
            }
        </Box>
    )

};
