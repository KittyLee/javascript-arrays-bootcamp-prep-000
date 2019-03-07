var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  addElementToBeginningOfArray = ["element", ...array]
  return element
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
