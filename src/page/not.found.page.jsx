import { ButtonLink, Screen, Title } from "../components/materials";

export default function NotFoundPage() {
    return (
        <Screen>
            <Title> Not found page </Title>
            <ButtonLink to={-1}>กลับสู่หน้าหลัก</ButtonLink>
        </Screen>
    )

};
