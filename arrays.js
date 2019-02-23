var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(list, item) {
  list = [item, ...list]
  return list
}

function destructivelyAddElementToBeginningOfArray(list, item) {
  var newAddition = [item, ...list]
  return newAddition
}