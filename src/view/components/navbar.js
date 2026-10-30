export function navbar(){
    const paths = [
        {link: "#home", text: "Lige nu"},
        {link: "#history", text: "Historik"}, 
        {link: "#overview", text: "Oversigt"}
    ]

    const currentPath = location.hash

    let navbar = `
        <nav class="navStyle">
            <div>
                <img src="../src/assets/mainIcon.svg" />
                ${paths.map((path) => 
                    `<a class=${currentPath === path.link ? 'active' : null} href=${path.link}>${path.text}</a>`
                ).join('')}
            </div>
        </nav>
    `
    return navbar
}