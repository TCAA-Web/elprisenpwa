import { getCurrentTime } from "../../model/getCurrentTime.js"

export function priceList(data){

    //HSL color values range from 0-100 is red to green
    const getColorGrading = (value) => {
        const clone = [...data]
        const sortedByPrice = clone.sort((a,b) => a.DKK_per_kWh < b.DKK_per_kWh)

        const firstIndex = 0;
        const lastIndex = clone.length -1;

        const min = sortedByPrice[firstIndex].DKK_per_kWh
        const max = sortedByPrice[lastIndex].DKK_per_kWh
        const val = value.DKK_per_kWh

        const colorValue = ((val - min) / (max - min)) * 100
        return colorValue
    }


    return ( 
        `
            <section class="priceListStyle">
                <ul>
                ${data.map((item) => {
                    const {currentStartTime} = getCurrentTime(item)
                    return (`<li>
                            <p>Kl. ${currentStartTime}</p>
                            <p style="${`color: hsl(${getColorGrading(item)},100%,50%)`}">${item.DKK_per_kWh.toFixed(3)} kr.</p>
                            </li>
                            `)
                }).join("")}          
                </ul>
            </section>
        `
    )
}