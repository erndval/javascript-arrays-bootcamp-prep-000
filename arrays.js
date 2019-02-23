var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(list, item) {
  list = [item, ...list]
  return list
}

function AddElementToBeginningOfArray(list, item) {
  var newAddition = [item, ...list]
  return newAddition
}