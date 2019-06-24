import weekdays from './weekdays'
import findIndex from './findIndex'
import shortweekdays from './shortWeekdays'

const getFullWeekday = weekday => {
  const index = findIndex(shortweekdays, name => name === weekday)
  if (index === -1) return
  return weekdays[index]
}

export default getFullWeekday
