import { cva } from "class-variance-authority";
import { Box, Button, Icon, Modal, Title } from "../materials";

let styleBox = cva(
    "bg-gray-900 p-16 gap-8 rounded-lg flex flex-col relative aspect-video justify-center animate-fade",
    {
        variants: {
            variant: {
                info: "",
                warning: "",
                danger: "",
                success: ""
            }
        }
    }
)

let styleIcon = cva(
    "fa-solid",
    {
        variants: {
            variant: {
                info: "",
                warning: "",
                danger: "",
                success: ""
            }
        }
    }
)

export default function Alert({ children, onClose, variant }) {
    return (
        <Modal onClose={onClose}>
            <Box className={styleBox({ variant })} onClick={(e) => e.stopPropagation()} >
                <Button variant={"ghost"} className={"top-2 right-2 absolute p-0"} onClick={onClose}>
                    <Title variant={"secondary"}> <Icon variant={"xmark"} /> </Title>
                </Button>
                <Title variant={"third"}> <Icon variant={variant} />  {children} </Title>
            </Box>
        </Modal>
    )
};
