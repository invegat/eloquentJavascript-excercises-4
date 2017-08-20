var exercises = require('../exercises');

describe('range(start,end)', function() {
  it('should return a array of start to end inclusive', function() {
    expect(exercises.range(0,3)).toEqual([0,1,2,3]);
    expect(exercises.range(1,10,2)).toEqual([1,3,5,7,9]);
    expect(exercises.range(5,2,-1)).toEqual([5,4,3,2]);
  });
});
describe('sum(start,end)', function() {
  it('should return the sum of all the integer numbers between start and end inclusive', function() {
    expect(exercises.sum(exercises.range(1,10))).toBe(55);
    expect(exercises.sum([])).toBe(0);
  });
});
describe('reverseArray(arr)', function() {
  it('should return a new array with in the reverse order', function() {
    var range = exercises.range(1,10);
    var ref = range;
    var reversed = exercises.reverseArray(range);
    expect(reversed).toEqual(exercises.range(10,1,-1));
    expect(ref).not.toBe(reversed);
    expect(ref).not.toEqual(reversed);
    expect(ref).toBe(range);
    expect(ref).toEqual(range);    
    expect(exercises.reverseArray([])).toEqual([]);
  });
});
describe('reverseArrayInPlace(arr)', function() {
  it('should return the same array reversed', function() {
    var arr = [1,2,3];
    var ref = arr;
    exercises.reverseArrayInPlace(arr);
    expect(arr).toEqual([3,2,1]);  
    expect(arr).toBe(ref);    
    exercises.reverseArrayInPlace(arr);    
    expect(arr).toBe(ref);
    expect(arr).toEqual([1,2,3]);    
    arr = [];
    ref = arr;
    exercises.reverseArrayInPlace(arr);
    expect(arr).toBe(ref);
    expect(arr).toEqual([]);
  });
});
describe('arrayToList(arr)', function() {
  it('should return a list', function() {
    expect(exercises.arrayToList([1,2,3])).toEqual(
      {
        value: 1,  
        rest: {
          value: 2,  
          rest: {
            value:  3,
            rest: null
          } 
        }       
      }
    );
    expect(exercises.arrayToList([])).toEqual({});
  });
});
describe('nth(list,depth)', function() {
  it('should return the value at the depth or undefined if not found', function() {
    expect(exercises.nth(exercises.arrayToList([1,2,3]),2)).toBe(3);
    expect(exercises.nth({},0)).toBe(undefined);
    expect(exercises.nth({},1)).toBe(undefined);
  });
});
describe('deepEqual(obj1,obj2)', function() {
  it('should return the boolean value obj1 === obj2', function() {
    expect(exercises.deepEqual(exercises.arrayToList([1,2,3]),exercises.arrayToList([1,2,3]))).toBe(true);
    expect(exercises.deepEqual(exercises.arrayToList([1,2,3]),exercises.arrayToList([1,1,3]))).toBe(false);   
    expect(exercises.deepEqual(exercises.arrayToList([1,2,3]),exercises.arrayToList([1,2,3,4]))).toBe(false);      
    expect(exercises.deepEqual([1,2,3],[1,2,3])).toBe(true);
    expect(exercises.deepEqual([1,2,3],[1,1,3])).toBe(false);
    expect(exercises.deepEqual([1,2,3,4],[1,2,3])).toBe(false);
    expect(exercises.deepEqual(0,0)).toBe(true);
    expect(exercises.deepEqual(0,1)).toBe(false); 
  });
});