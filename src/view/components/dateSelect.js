export function dateSelect(date){

    return `<input class="dateSelect" value=${date} type="date" onchange="(e) => console.log(e)" id="dateSelect"/>`
}