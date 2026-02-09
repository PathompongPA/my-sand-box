import useLoginPage from "./login.hook";
import { Outlet } from "react-router-dom";
import { Alert, Loading } from "../../components/ui";
import { Button, Flex, InputPassword, InputText, Screen, Title } from "../../components/materials";

export default function LoginPage() {
    const { state, event } = useLoginPage();
    const { user, password, isLogin, msgAlert } = state;
    return !isLogin ?
        (
            <Screen>
                <Flex className={" animate-slid-down "} >
                    <Title>login</Title>
                    <InputText onChange={event.change.user} value={user} >User</InputText >
                    <InputPassword onChange={event.change.password} value={password}>Password</InputPassword>
                    <Button variant={"secondary"} size={"xl"} onClick={event.submit}>เข้าสู่ระบบ</Button>
                </Flex>
                {msgAlert && <Alert variant={"warning"} onClose={event.closeAlert}>{msgAlert}</Alert>}
                <Loading />
            </Screen >
        ) :
        (
            <Screen className={"justify-start"}>
                <Outlet />
            </Screen>
        )

};
