export function getCurrentTime(current){

    const currentStartTime = new Date(current.time_start).toLocaleTimeString('da-DK').substring(0,5)
    const currentEndTime = new Date(current.time_end).toLocaleTimeString('da-DK').substring(0, 5)

    return {currentStartTime, currentEndTime}

}