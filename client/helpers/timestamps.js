import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)

const time = new TimeAgo('en-US')

const timestamps = (date) => {
  const createdDate = Date.parse(date)

  const result = time.format(createdDate, 'mini')

  return result
}

module.exports = {timestamps}