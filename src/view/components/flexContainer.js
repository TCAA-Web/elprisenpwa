export function flexContainer(items, dir){

    if (dir == 'col')
    return `
        <section class="flexContainerCol">
            ${items.map((item) => `${item}`).join("")}
        </section>
    `

    if (dir == 'row')
        return `
      <section class="flexContainerRow">
            ${items.map((item) => `${item}`).join("")}
        </section>
    `

    else {
        return `<div>No direction supplied for container</div>`
    }
}