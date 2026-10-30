import { getCurrentData } from "../../model/getCurrentData.js";
import { getCurrentTime } from "../../model/getCurrentTime.js";
import { flexContainer } from "../components/flexContainer.js";
import { focusCircle } from "../components/focusCircle.js";
import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
import { pageHeading } from "../components/pageHeading.js";
import { paragraph } from "../components/paragraph.js";
import { priceList } from "../components/priceList.js";
import { settings } from "../components/settings.js";

export async function overviewpage (){

    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const area = 'DK2'

    const pageTitle = 'OVERSIGT';
    const data = await getCurrentData(year, month, day, area)
    const clone = [...data]

    const sortedByPrice = clone.sort((a,b) => a.DKK_per_kWh > b.DKK_per_kWh)

    const firstIndex = 0;
    const lastIndex = clone.length -1;

    console.log("Sorted: ", sortedByPrice)
    console.log('Data: ', data)
   

    
    const page = `
    ${navbar()}
        ${settings()}
        ${pageHeading(pageTitle)}
        ${flexContainer(
            [`<div>${focusCircle(clone[firstIndex].DKK_per_kWh.toFixed(3), 'small')}<p>Laveste pris</p></div>`,
             `<div>${focusCircle(clone[lastIndex].DKK_per_kWh.toFixed(3), 'small')}<p>Højest pris</p></div>`], 
        'row')}
        ${priceList(data)}
        ${footer()}
        `
    return (page)
}