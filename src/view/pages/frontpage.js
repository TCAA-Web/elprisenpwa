import { getCurrentData } from "../../model/getCurrentData.js";
import { getCurrentTime } from "../../model/getCurrentTime.js";
import { focusCircle } from "../components/focusCircle.js";
import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
import { pageHeading } from "../components/pageHeading.js";
import { paragraph } from "../components/paragraph.js";
import { settings } from "../components/settings.js";

export async function frontpage (){

    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const area = 'DK2'

    const pageTitle = 'ELPRISEN LIGE NU';
    const data = await getCurrentData(year, month, day, area)

    const current = data.find((item) => new Date(item.time_start) <= today && new Date(item.time_end) >= today)
    
    const {currentStartTime, currentEndTime} = getCurrentTime(current)

    console.log(current)
    console.log('Data: ', data)

    const page = `
        ${navbar()}
        ${settings()}
        ${pageHeading(pageTitle)}
        ${focusCircle(current.DKK_per_kWh, 'large')}
        ${paragraph(currentStartTime + " - " + currentEndTime, 'green')}
        ${footer()}
        `
    return (page)
}