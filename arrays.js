var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  addElementToBeginningOfArray = ["element", ...addElementToBeginningOfArray]
  return element, array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
