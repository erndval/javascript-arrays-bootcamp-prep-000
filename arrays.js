var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(list, item) {
  list.unshift(item)
  return list
}

function addElementToBeginningOfArray(list, item) {
  var newAddition = [item, ...list]
  return newAddition
}

function destructivelyAddElementToEndOfArray(list, item) {
  list.push(item)
  return list
}

function addElementToEndOfArray(list, item) {
  var latestAddition = [...list, item]
  return latestAddition
}