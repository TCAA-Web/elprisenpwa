import { paragraph } from "./paragraph.js";

export function footer(){

    const moms = "Ex moms."
    const region = 'Øst Danmark'

    return `
        <footer class="footerStyle">
            <p class="pStyle">Priserne er <span class="greenText">${moms}</span> og afgifter.</p>
            <p class="pStyle">Du vises lige nu priserne for <span class="greenText">${region}</span>.</p>
        </footer>
    `
}