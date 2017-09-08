'use strict'

module.exports = (logSources, printer) => {
  var logEntry = logSources[0].popAsync()
  (logEntry.then(data => console.log(data)))
}