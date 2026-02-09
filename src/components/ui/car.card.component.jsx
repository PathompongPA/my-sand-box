import { cva } from "class-variance-authority";
import { Box, Reveal } from "../materials";
import { useTranslation } from "react-i18next";

let cardStyle = cva(" ring ring-black/20 h-full rounded-lg lg:rounded-3xl overflow-hidden relative  group hover:cursor-pointer  active:scale-95 duration-300 ")
let styleImage = cva(
    " aspect-square object-cover brightness-50 group-hover:w-full group-hover:brightness-50 duration-300",

    {
        variants: {
            variant: {}
        }
    }
)
let titleStyle = cva("",
    {
        variants: {
            variant: {
                "primary": " font-bold text-white lg:text-2xl",
                "secondary": " font-normal  text-white/75 lg:text-lg"
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
)
let moreDetailStyle = cva(" hidden lg:absolute top-0 text-white ")

function MoreDetail({ children, variant }) {
    return <div className={moreDetailStyle({ variant })}>{children}</div>

}
function Title({ children, variant }) {
    return <div className={titleStyle({ variant })}>{children}</div>

}
export default function CardCar({ variant, brand, name, thumbnail }) {
    const { t } = useTranslation();
    return (
        <Reveal>
            <Box className={cardStyle({ variant })}>
                <img className={styleImage({ variant })} src={thumbnail} />
                <Box className={" p-2 lg:p-4 flex flex-col justify-between absolute bottom-0 w-full "}>
                    <Title > {brand}</Title>
                    <Title variant={"secondary"} > {name}</Title>
                </Box>
                <MoreDetail>{t("moreDetail")}</MoreDetail>
            </Box>
        </Reveal>
    )

};
