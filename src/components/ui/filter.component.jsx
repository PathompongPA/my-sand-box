import { cva } from "class-variance-authority";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "../materials";


let filterStyle = cva(" gap-4 p-4 m-4 shadow-2 rounded-4xl shadow-2xl/50  flex flex-col lg:flex-row  lg:w-fit  lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bg-white/30 lg:rounded-[64px] lg:px-16 lg:p-8 lg:bottom-8")

let btnStyle = cva(" shadow-1 p-4  font-bold  flex flex-row gap-4  items-center rounded-4xl active:scale-95 lg:hover:cursor-pointer lg:hover:scale-90 lg:active:scale-110 duration-300  lg:py-4 lg:px-8", {
    variants: {
        variant: {
            "primary": " bg-blue-1 text-white justify-center ",
            "secondary": " bg-white text-blue-1 lg:justify-center"
        }
    },
    defaultVariants: {
        variant: "secondary"
    }
})

let iconStyle = cva("fa-solid   text-blue-1 text-xl lg:text-2xl",
    {
        variants: {
            variant: {
                "primary": " bg-blue-1 text-white",
                "secondary": " bg-white text-blue-1"
            },
            icon: {
                "car": "fa-car",
                "calendar": "fa-calendar",
                "search": ' fa-solid fa-magnifying-glass'
            }
        }
    }
)


let textStyle = cva(" text-base lg:text-2xl")

function Btn({ children, variant, icon }) {
    return (
        <button className={btnStyle({ variant })}>
            <i className={iconStyle({ icon, variant })} />
            <div className={textStyle()}>
                {children}
            </div>
        </button>
    )
}


export default function Filter() {
    let ref = useRef(null)
    const { t } = useTranslation();
    useEffect(() => { ref.current.parentElement.classList.add("relative") }, [])

    return (
        <Box className={filterStyle()} ref={ref}>
            <Btn icon="car" > {t("filterCar.btn-brand")}</Btn>
            <Btn icon="calendar" > {t("filterCar.btn-pickup-date")}</Btn>
            <Btn icon="calendar" > {t("filterCar.btn-pickup-return")}</Btn>
            <Btn icon="search" variant={"primary"} > {t("filterCar.search")}</Btn>
        </Box>
    )

};
