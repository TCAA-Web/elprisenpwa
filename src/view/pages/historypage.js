import { getCurrentData } from "../../model/getCurrentData.js";
import { dateSelect } from "../components/dateSelect.js";
import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
import { pageHeading } from "../components/pageHeading.js";
import { priceList } from "../components/priceList.js";
import { settings } from "../components/settings.js";

let data = null;

export async function historypage (date){

    const today = date ? new Date(date) : new Date()
    console.log(today)
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const area = 'DK2'

    const pageTitle = 'HISTORIK';
    data = await getCurrentData(year, month, day, area)

    const current = data.find((item) => new Date(item.time_start) <= today && new Date(item.time_end) >= today)

    const page = `
        ${navbar()}
        ${settings()}
        ${pageHeading(pageTitle)}
        ${dateSelect(date)}
        ${priceList(data)}
        ${footer()}
        `

    return (page)
}