//Do not change any of the function names

function range(start,end,step) {
  if (step == undefined || step === 0) {
    step = 1;
  }
  var result = [];
  for (var i = start;(step < 0) ? i>=end : i<=end;i+=step) {
    result.push(i);
  }
  return result;
}
function sum(arr) {
  return arr.reduce(function(sum,value){
    return sum + value;
  }, 0);
}
function reverseArray(arr) {  // this is the better reverse because of the immutability necessary
  var result = [];            // for functional programming
  for (var i = arr.length -1; i>=0; i--) {
    result.push(arr[i]);
  }
  return result;
}
function reverseArrayInPlace(arr) {
  var reversed = reverseArray(arr);
  for (var i = 0;i<reversed.length;i++) {
    arr[i] = reversed[i];
  }
}
function prepend(value,list) {
  var result = {};
  result['value'] = value;
  result['rest'] = list;
  return result;
}
function nth(current,depth) {  // don't see any use for this in arrayToList so just jest testing
  if (depth === 0) {
    return current.value;
  }
  current = current['rest'];
  if (current == null || current === undefined)  {
    return undefined;
  }
  return nth(current,--depth);
}

function arrayToList(arr) {
  if (arr.length == 0)
    return {};
  var result = prepend(arr[0], arr.length > 1 ? {} : null);
  var current = result.rest;
  for(var i = 1;i<arr.length;i++) {
    current['value'] = arr[i];
    current['rest'] = (i < arr.length - 1) ? {} : null;
    current = current.rest;
  }
  return result;
}
/* eslint-disable no-consol */
function deepEqual(obj1, obj2) {
  var typeObj1 = typeof(obj1);
  var typeObj2 = typeof(obj2);
  if (typeObj1 != typeObj2) {
    return false;
  }
  if (typeObj1 != 'object') {
     return obj1 === obj2; 
  }
  var props1 = [];
  for (var prop in obj1) {
      props1.push({prop:prop, value:obj1[prop]});
  }

  for (prop in obj2) {
    var foundIndex = -1;
    var match = props1.find(function(value, index){
      var result = value.prop === prop;
      if (result) {
        foundIndex = index;
      }
      return result;
    });
    if (match == undefined)
      return false;  // obj2 property not found in obj1
    if (!deepEqual(match.value,obj2[prop])) {
      return false;
    }
    props1.splice(foundIndex,1);
  }  
  if (props1.length > 0) {
    return false;  // obj1 has an unmatched property
  }
  return true;
}
module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  nth: nth,
  deepEqual: deepEqual,
};
