import { paragraph } from "./paragraph.js"

export function focusCircle(currentPrice, size){
    if (size === 'large')
        return `
                <div class="focusLarge">
                    ${paragraph(`${currentPrice} kr.`, 'green')}
                    ${paragraph(`PR. KwH`, 'green')}
                </div>
                `
    if (size === 'small')
        return `<div class="focusSmall">      
                    ${paragraph(`${currentPrice} kr.`, 'green')}
                    ${paragraph(`PR. KwH`, 'green')}
                </div>`

    else return `<div>No size supplied</div>`
}