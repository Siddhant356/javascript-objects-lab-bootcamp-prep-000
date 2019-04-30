var recipes={};
function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object,Object.assign({}, object, {kye: value})
}
