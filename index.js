var recipes = {}
function updateObjectWithKeyAndValue (object, key, value) {
  var obj = { prop: 1 }
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj)
  return object;
}