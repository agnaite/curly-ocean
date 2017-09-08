'use strict'

module.exports = (logSources, printer) => {
  var logEntry = logSources[0].popAsync()
  console.log(logEntry.then())
}