import { ButtonLink, Flex, Icon, Screen, Title } from "../components/materials";

export default function ErrorPage() {
    return (
        <Screen>
            <Flex variant={"col"} justify={"center"} className={""} >
                <Title variant={"hero"}> <Icon variant={"ban"} /> </Title>
                <Title> Error, Server not available.</Title>
                <ButtonLink to={"/"} cl>กลับเข้าสู่เว็บไซส์</ButtonLink>
            </Flex>
        </Screen>
    )

};
