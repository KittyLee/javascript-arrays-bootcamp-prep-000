var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  addElementToBeginningOfArray.unshift("element");
  return [element, array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  addElementToEndOfArray.push("element");
  return [element, array]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return [array]
}
