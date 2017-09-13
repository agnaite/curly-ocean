'use strict'

const binarySearchInsert = require('binary-search-insert')
const mergeSort = require('mergesort')

module.exports = (logSources, printer) => {
  const logs = [];
  const comparator = function (a, b) { return a.date - b.date; }

  logSources.forEach((logSource) => {
    logs.push(logSource.pop())
  })

  let sortedArray = mergeSort(comparator, logs);
  let oldest = sortedArray.shift()

  while (true) {
    let oldest = sortedArray.shift()
    let idx = logs.indexOf(oldest)
    let log = logSources[idx].pop()

    printer.print(oldest)

    if (!log) { break }

    logs[idx] = log
    binarySearchInsert(sortedArray, comparator, log)
  }
  printer.done()
}