import { Box, Container, InputSelect, Reveal, Screen, SlideButton, Title, ToggleButton } from "./components/materials";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { i18n } from "./i18n";
import { Calendar, Filter, ListCar } from "./components/ui";

const fetchApi = async (path) => {
    let url = `https://carrent88.com/api/${path}`
    return await fetch(url).then((res) => {
        return res.json()
    })
}

const useDemoChangeLanguage = () => {
    const [content, setContent] = useState(null)

    const getContent = async () => {
        let res = await fetchApi("content")
        setContent(res.data)
    }

    let heroImage = content?.filter((item) => item.id === "viewBoard.image")[0]?.value

    useEffect(() => {
        getContent()
    }, [])
    return {
        s: {
            content,
            heroImage
        },
    }
}
function Menu({ children, variant, isOpenMenu, className }) {
    let style = cva(
        " fixed top-0 flex  gap-8 p-8 backdrop-blur-sm  lg:items-center  w-full lg:justify-end flex-col  lg:flex-row left-0 h-screen bg-gray-50/80 border mt-1 lg:static lg:bg-transparent lg:m-0 lg:h-fit ", {
        variants: {
            isOpenMenu: {
                true: " scale-100 ",
                false: " scale-0 lg:scale-100 "
            }
        },
        defaultVariants: {
            isOpenMenu: false
        }
    })
    return (
        <ul className={style({ variant, className, isOpenMenu })}>{children}</ul>
    )

}

function Item({ children, to }) {
    return (
        <li className=" text-blue-950 font-bold text-base ">
            <Link to={to}>{children}</Link>
        </li>
    )
}

function HamburgerBtn({ isOpenMenu, onClick }) {

    let btnStyle = cva(" flex flex-col p-2 gap-1 lg:hidden ", {
        variants: {
            isOpenMenu: {
                false: "",
                true: ""
            }
        }
    })

    let dashStyle = cva(" bg-blue-1 h-1.25 w-8.75 rounded-2xl",
        {
            variants: {
                isOpenMenu: {
                    false: "",
                    true: ""
                }
            }
        }
    )

    return (
        <div className={btnStyle({ isOpenMenu })} onClick={onClick}>
            <div className={dashStyle({ isOpenMenu })}></div>
            <div className={dashStyle({ isOpenMenu })}></div>
            <div className={dashStyle({ isOpenMenu })}></div>
        </div>
    )
}

function Logo({ className }) {
    let style = cva(" aspect-square w-20 ")
    return <img src="https://www.carrent88.com/uploads/677c3485-f01f-4892-864c-2117812b8a6c.jpg" className={style({ className })} alt="" />
}
function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const { t } = useTranslation()
    const changeLanguage = (lag) => i18n.changeLanguage(lag)
    let languages = Object.keys(i18n.store.data)
    let nowLanguage = i18n.language
    const toggleMenu = () => { setIsOpenMenu(!isOpenMenu); console.log("toggle menu.", isOpenMenu); }
    return (
        <Box className=" top-0 z-99 sticky lg:fixed  w-full flex flex-row justify-between items-center px-4 lg:px-8 gap-8 border-b-4 border-amber-400 bg-white " >
            <HamburgerBtn isOpenMenu={isOpenMenu} onClick={toggleMenu} />
            <Logo />
            <Menu isOpenMenu={isOpenMenu}>
                <Item to={"/"}>{t('nav.menu.booking')}</Item>
                <Item to={"/howToBooking"}>{t('nav.menu.howToBooking')}</Item>
                <Item to={"/review"}>{t('nav.menu.review')}</Item>
                <Item to={"/contact"}>{t('nav.menu.contact')}</Item>
                <Item to={"/Faq"}>{t('nav.menu.FAQ')}</Item>
            </Menu>
            <Box className={"flex flex-row gap-4"}>
                <InputSelect defaultValue={nowLanguage} options={languages} onSelectOption={changeLanguage} />
            </Box>
        </Box>
    )

}

export default function DemoChangeLanguage() {
    const { s } = useDemoChangeLanguage();
    const { t } = useTranslation()
    return (
        <Screen className={"  bg-white justify-start h-[10vh] "}>
            <Navbar />
            <Box className={"w-full"}>
                <img className=" aspect-video object-cover w-full " src={s.heroImage} alt="" />
                <Filter />
            </Box>
            <Box className={"bg-white p-4 gap-4 lg:p-8 lg:gap-8 flex flex-col"}>
                <Reveal className={"col-span-full"} >
                    <h1 className=" col-span-full font-bold text-blue-950 text-3xl lg:text-5xl">{t("popular")}</h1>
                </Reveal>
                <ListCar />
            </Box>
            <Calendar />
            {/* <Box className={"p-16"}>
                <Reveal>
                    <Box className={"text-white"}>{JSON.stringify(s.content, null, 2)}</Box>
                </Reveal>
            </Box> */}
        </Screen >
    )
};
