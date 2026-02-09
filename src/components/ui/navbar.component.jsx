import { Link } from "react-router-dom";
import { Button, ButtonLink, Flex, Title } from "../materials";
import useHomePage from "../../page/home/home.hook";
import Clock from "./clock.component";

export default function Navbar() {
    const { event } = useHomePage();
    return (
        <Flex variant={"row"} justify={"between"} className={"w-full sticky top-0 select-none"}>
            <Clock />
            <Flex variant={"row"}>
                <ButtonLink >หน้าหลัก</ButtonLink>
                <ButtonLink to="/car">รถ</ButtonLink>
                <ButtonLink to="/customer">ลูกค้า</ButtonLink>
                <ButtonLink to="/booking">ประวัติการจอง</ButtonLink>
                <ButtonLink to="/chat">แชท</ButtonLink>
                <Button onClick={event.logout}>logout</Button>
            </Flex>
        </Flex>
    )

};
