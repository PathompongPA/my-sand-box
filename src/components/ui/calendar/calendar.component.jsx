import dayjs from "dayjs";
import { Modal } from "../../materials";
import { useEffect, useState } from "react";
import { cva } from "class-variance-authority";

const genDays = (now) => {
    let days = []
    let positionDayFirst = now?.startOf("month")?.get("day")
    let startMonth = positionDayFirst === 0 ? now?.startOf("month") : now?.startOf("month").add(positionDayFirst * -1, "days")
    for (let index = 0; startMonth.add(index, "day").isBefore(now.endOf("month")); index++) {
        days.push(startMonth.add(index, "day"))
    }
    return days
}
export default function Calendar() {
    const [now, setNow] = useState(dayjs())
    const [days, setDays] = useState(null)
    const [value, setValue] = useState(null)

    useEffect(() => {
        setDays(genDays(now))
        setValue(null)
    }, [now])
    const onNextMonth = () => setNow(now.add(1, "month"))
    const onPreMonth = () => setNow(now.add(-1, "month"))
    const onSelectDay = (newValue) => { setValue(newValue) }
    return (
        <Modal>
            <div className=" p-8 bg-white text-blue-1 rounded-2xl font-bold h-75">
                <div className="">{`${now.format("MMMM")}`}</div>
                <div className=" flex gap-2">
                    <button onClick={onPreMonth}> pre</button>
                    <button onClick={onNextMonth}> next</button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {days?.map((day, index) => <Day value={day} onClick={onSelectDay} isToday={day?.isSame(value)} key={index} />)}
                </div>
                <div className="">
                    {value?.format("DD-MMMM-YYYY")}
                </div>
            </div>
        </Modal>
    )
};

function Day({ value, className, onClick, isToday, isAfter, isOutOfMonth }) {
    let style = cva("w-full h-full border text-center", {
        variants: {
            isToday: {
                true: " bg-amber-300",
                false: ''
            },
            isAfter: {
                true: " bg-gray-300",
                false: ''
            },
            isOutOfMonth: {
                true: " bg-red-300",
                false: ''
            },
        }
    })
    let day = value?.isAfter(dayjs()) ? value.get("D") : ""
    return <div className={style({ className, isToday, isAfter, isOutOfMonth })} onClick={() => { onClick(value) }}>{day}</div>
}