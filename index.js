var recipes={};

function updateObjectWithKeyAndValue(object, kye, value){
  return Object.assign({}, object, {kye: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key){
  nobj=object
  return delete nobj.key
}
