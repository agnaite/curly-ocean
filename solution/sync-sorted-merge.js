'use strict'

module.exports = (logSources, printer) => {

  const entries = []
  logSources.forEach(logSource => {
    let newEntry = logSource.pop()
    while (newEntry) {
      entries.push(newEntry)
      newEntry = logSource.pop()
    }
  });
  const sortedEntries = mergeSort(entries);

  sortedEntries.forEach(entry => {
    printer.print(entry)
  });

  printer.done();
}

var mergeSort = (arr) => {
  if (arr.length < 2)
    return arr

  var middle = parseInt(arr.length / 2)
  var left   = arr.slice(0, middle)
  var right  = arr.slice(middle, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}

var merge = (left, right) => {
  var result = []
  while (left.length && right.length) {
    if (left[0].date <= right[0].date) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length)
    result.push(left.shift())

  while (right.length)
    result.push(right.shift())

  return result
}