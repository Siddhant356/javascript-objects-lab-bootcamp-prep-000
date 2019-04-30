var recipes={};
function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function updateObjectWithKeyAndValue(object, kye, value){
  return Object.assign({}, object, {kye: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key){
  delete object.key
}
function