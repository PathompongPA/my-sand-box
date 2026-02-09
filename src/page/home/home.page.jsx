import { Outlet } from "react-router-dom";
import { Box, Button, Flex, InputText, Title } from "../../components/materials";
import { ListCar, Loading, Navbar } from "../../components/ui";


export default function HomePage() {

    return (
        <Box className={"flex flex-col justify-start items-start"}>
            <Navbar />
            {/* <ListCar /> */}
            <Outlet />
        </Box>
    )
};
