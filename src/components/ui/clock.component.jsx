import { useClock } from "../../hook"
import { Flex, Title } from "../materials";

export default function Clock() {
    const { hour, minute, second } = useClock();
    return (
        <Flex variant={"row"} item={"end"}>
            <Title>{hour} :</Title>
            <Title>{minute} :</Title>
            <Title>{second}</Title>
        </Flex>
    )

};
