export async function getCurrentData(year, month, day, area){
    try {
        let response = await fetch(`https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${area}.json`)
        let jsonData = await response.json()
        return jsonData
        }
    catch (err){
        console.error(err)
        }
    }