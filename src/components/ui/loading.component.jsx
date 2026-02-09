import { useRevalidator } from "react-router-dom";
import { Flex, Modal } from "../materials";
import { cva } from "class-variance-authority";

let styleLoading = cva(
    "animate-bounce  text-white duration-75 ",
    {
        variants: {
            variant: {

            }
        }
    }
)
export default function Loading({ variant }) {
    let revalidator = useRevalidator()
    let isLoading = revalidator.state === "loading"
    return isLoading ?? (
        <Modal>
            <div className={styleLoading({ variant })}> loading . . .  </div>
        </Modal>
    )

};
