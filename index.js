var recipes = {}
function updateObjectWithKeyAndValue (object, key, value) {
  var obj = { prop: 1 }
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return obj
}
const object = {
