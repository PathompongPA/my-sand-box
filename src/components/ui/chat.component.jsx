import { Button, InputText } from "../materials"
import { useChat } from "../../hook"
import { cva } from "class-variance-authority"

let styleMessage = cva(
    "text-white",
    {
        variants: {
            isMyMessage: {
                true: "text-end",
                false: "text-start",
            }
        }
    }
)

function User({ children, isMyMessage }) {
    return !isMyMessage && <div className=" text-sm">{children}</div>
}

function Message({ id, text, isMyMessage }) {
    return (
        <div className={styleMessage({ isMyMessage })}>
            <User isMyMessage={isMyMessage}>{id}</User>
            <div className="" > {text} </div>
        </div>
    )
}

export default function Chat() {
    const { state, event } = useChat();
    return (
        <div className="border  border-white p-4 gap-4 flex flex-col ">
            <div className="text-white border min-h-50 p-4 overflow-y-scroll">
                {state?.chats?.map((chat, index) =>
                    <Message id={chat?.id} text={chat?.message} isMyMessage={chat?.user === state.myId} key={index} />
                )}
            </div>
            <div className=" flex flex-row gap-4 p-2">
                <InputText value={state.message} onChange={event.changeMessage} />
                <Button onClick={event.sendMessage}  >ส่ง</Button>
            </div>
        </div>
    )

};
