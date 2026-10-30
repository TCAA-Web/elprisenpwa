import { frontpage } from "../view/pages/frontpage.js";
import { historypage } from "../view/pages/historypage.js";
import { notfoundpage } from "../view/pages/notfoundpage.js";
import { overviewpage } from "../view/pages/overviewpage.js";

const root = document.getElementById('root')

const routes = [
    {path: "404", page: notfoundpage},
    {path: "home", page: frontpage},
    {path: "overview", page: overviewpage},
    {path: "history", page: historypage}
]

// Variable to keep track of current route
let currentRoute = null
let selectedDate = null

export async function router(){

    // Find new currentRoute with location path
    const path = location.hash.slice(1);
    currentRoute = routes.find((el) => el.path === path)
   
    // If initial startup or /index.html is loaded - set route to home
    if (path === ""){
        currentRoute = routes[1]
    }

    // If no currenRoute is set - set route to 404 page
    if (!currentRoute){
        currentRoute = routes[0]
    }
    
    // Clear DOM
    root.innerHTML = ""

    // Draw new DOM
    root.innerHTML = await currentRoute.page()
}


// Bind listeners to run router on load and hashchange
window.addEventListener('load', router);
window.addEventListener('hashchange', router)

root.addEventListener("change", async (e) => {
  const target = e.target 

  if (target.matches("#dateSelect")) {
    console.log(target.value)
    selectedDate = target.value
    root.innerHTML = ""
    root.innerHTML = await currentRoute.page(selectedDate)
  }
})