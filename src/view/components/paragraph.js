export function paragraph(text, color){
    return `<p class="${color === 'green' ? 'greenText' : 'pStyle'}">${text}</p>`
}