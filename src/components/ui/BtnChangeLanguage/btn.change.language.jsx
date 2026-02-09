import { cva } from "class-variance-authority";
import { i18n } from "../../../i18n";
import useBtnChangeLanguage from "./btn.change.language.hook";
import { Box, Button } from "../../materials";

let syle = cva(" px-2 py-1 rounded-4xl *:bg-transparent uppercase font-extrabold")

export default function BtnChangeLanguage() {
    const { e, refs } = useBtnChangeLanguage();
    let DropDown = Box
    let Container = Box
    return (
        <Button ref={refs.btnChangeLanguage} className={" relative bg-blue-800 rounded-4xl min-w-30 flex items-center justify-center hover:text-amber-500 hover:cursor-pointer active:scale-95 active:text-white "} onClick={e?.onToggleDropDown}>
            <Box className={syle()}   >{i18n.language}</Box>
            <Box className={" transition-all duration-500 "} ref={refs.iconDown}> <i className="fa-solid fa-angle-down"></i> </Box>
            <Box className={" absolute bg-gray-800 top-full mt-4 w-full rounded-4xl gap-2 flex flex-col h-0 p-0 overflow-hidden  transition-[max-hight] delay-300 duration-2000 ease-out"} ref={refs.dropDown}>
                {Object?.keys(i18n.store.data).map((lag, index) => <Box className={`hover:text-amber-500 p-2 ${i18n.language === lag && "bg-gray-700 rounded-4xl"} active:scale-95 hover:cursor-pointer font-bold flex uppercase justify-center`} onClick={() => { e.onChangeLanguage(lag) }} key={index}>
                    {lag}
                </Box>)}
            </Box>
        </Button>
    )
}
