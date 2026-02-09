import { cva } from "class-variance-authority"
import { Title } from "./components/materials"
let detail = [
    "เลือกรถรุ่นที่คุณสนใจ",
    "ระบุวันที่ต้องการใช้งาน",
    "ระบุโลเคชั่นที่ต้องการจัดส่ง",
    "โอนมัดจำจองรถ",
    "รับรถพร้อมชำระค่าเช่าและเงินมัดจำเต็มจำนวน"
]

const Detail = ({ children, data }) => {
    return (
        <div className=" transition-all duration-1000 bg-white text-blue-950  h-0 w-full  group-hover:h-full group-hover:w-full overflow-hidden flex flex-col group-hover:p-4 gap-4 border border-red-700">
            {data?.map((item, index) => <div className="text-blue-950 text-start " key={index}>{`${index + 1}. ${item}`}</div>)}
        </div>
    )
}

const Card = ({ name, className }) => {
    let cardStyle = cva(" aspect-square group max-h-[300px] overflow-hidden rounded-4xl border bg-blue-950 flex flex-col transition duration-500 gap-0 hover:scale-110")
    let titleStyle = cva(" w-full h-full flex  transition-all  duration-800 justify-center items-center py-32 bg-blue-950 text-white group-hover:py-16 text-[32px] group-hover:text-3xl group-hover:h-fit font-extrabold border")
    return (
        <div className={cardStyle({ className })}>
            <div className={titleStyle()}>{name}</div>
            <Detail data={detail} />
        </div>
    )
}

const Cards = ({ children, className }) => {
    let style = cva(" flex border items-center gap-8 max-w-267.5 ")
    return (
        <div className={style({ className })}>
            {children}
        </div>
    )
}

const Screen = ({ children, className }) => {
    let style = cva("text-white flex flex-row  w-full justify-center h-150 ")
    return (
        <div className={style({ className })}>
            {children}
        </div>
    )
}

export default function Demo() {

    return (
        <Screen>
            <Cards>
                <Card name={"ขั้นตอนการจอง"} className={""} />
                <Card name={"เอกสารที่ต้องใช้"} />
                <Card name={"ช่องท่างการชำระเงิน"} />
            </Cards>
        </Screen>
    )
};
