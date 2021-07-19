export default function getDays () {
    const options = { weekday: 'long' }
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = new Date().getDay()
    const week = {}

    switch (day) {
        case 0:
            //sunday
            week[0] = 'Sunday'
            week[1] = 'Monday'
            week[2] = 'Tuesday'
            week[3] = 'Wednesday'
            week[4] = 'Thursday'
            week[5] = 'Friday'
            week[6] = 'Saturday'
            break;
        case 1:
            //monday
            week[0] = 'Monday'
            week[1] = 'Tuesday'
            week[2] = 'Wednesday'
            week[3] = 'Thursday'
            week[4] = 'Friday'
            week[5] = 'Saturday'
            week[6] = 'Sunday'
            break;
        case 2:
            //tuesday
            week[0] = 'Tuesday'
            week[1] = 'Wednesday'
            week[2] = 'Thursday'
            week[3] = 'Friday'
            week[4] = 'Saturday'
            week[5] = 'Sunday'
            week[6] = 'Monday'
            break;
        case 3:
            //wednesday
            week[0] = 'Wednesday'
            week[1] = 'Thursday'
            week[2] = 'Friday'
            week[3] = 'Saturday'
            week[4] = 'Sunday'
            week[5] = 'Monday'
            week[6] = 'Tuesday'
            break;
        case 4:
            //thursday
            week[0] = 'Thursday'
            week[1] = 'Friday'
            week[2] = 'Saturday'
            week[3] = 'Sunday'
            week[4] = 'Monday'
            week[5] = 'Tuesday'
            week[6] = 'Wednesday'
            break;
        case 5:
            //friday
            week[0] = 'Friday'
            week[1] = 'Saturday'
            week[2] = 'Sunday'
            week[3] = 'Monday'
            week[4] = 'Tuesday'
            week[5] = 'Wednesday'
            week[6] = 'Thursday'
            break;
        case 6:
            //saturday
            week[0] = 'Saturday'
            week[1] = 'Sunday'
            week[2] = 'Monday'
            week[3] = 'Tuesday'
            week[4] = 'Wednesday'
            week[5] = 'Thursday'
            week[6] = 'Friday'
            break;
    }

    return week
}