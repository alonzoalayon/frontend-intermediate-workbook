'use strict';

var assert = require('assert');

function arrayPop(arr) {
    // should remove the last item in the array, then return the arr
    var poppedItem = arr.pop();
    return arr;
}

function arrayPush(arr, item1, item2, item3) {
    // should add these items onto the end of the array, then return the array
    arr.push(item1, item2, item3);
    return arr;
}

function arrayShift(arr) {
    // should remove the first item in the array, then return the array
    arr.shift();
    return arr;
}

function arrayUnshift(arr, item1, item2, item3) {
    // should add these items onto the front of the array, then return the array
    arr.unshift(item1, item2, item3);
    return arr;
}

function createObject() {
    // should return an object with keys 'first', 'second', 'third' mapped to
    // values 1, 2, 3
   var value = {
        first: 1,
        second: 2,
        third: 3
    };
    return value;
}

function returnValueByKey(object, key) {
    // given an object and a key, return the value assigned to the key
  return object[key];
}

function assignKeyValue(object, key, value) {
    // given an object, key, and value, add the key/value pair
    // to the object. return the object
    object[key] = value;
    return object;
   
}


// Tests

describe('#arrayPop', function () {
    it('should remove the last item in the array, then return the array', function () {
        assert.deepEqual(arrayPop(['a', 'b', 'c']), ['a', 'b']);
        assert.deepEqual(arrayPop(['d', 'e', 'f']), ['d', 'e']);
  });
});

describe('#arrayPush', function () {
    it('should add these items onto the end of the array, then return the array', function () {
        assert.deepEqual(arrayPush(['a'], 'b', 'c', 'd'), ['a', 'b', 'c', 'd']);
        assert.deepEqual(arrayPush(['d'], 'e', 'f', 'g'), ['d', 'e', 'f', 'g']);
    });
});

describe('#arrayShift', function () {
    it('should remove the first item in the array, then return the array', function () {
        assert.deepEqual(arrayShift(['a', 'b', 'c']), ['b', 'c']);
        assert.deepEqual(arrayShift(['d', 'e', 'f']), ['e', 'f']);
    });
});

describe('#arrayUnshift', function () {
    it('should add these items onto the front of the array, then return the array', function () {
        assert.deepEqual(arrayUnshift(['a'], 'b', 'c', 'd'), ['b', 'c', 'd', 'a']);
        assert.deepEqual(arrayUnshift(['d'], 'e', 'f', 'g'), ['e', 'f', 'g', 'd']);
    });
});

describe('#createObject', function () {
    it('should return an object with keys "first", "second", "third" mapped to values 1, 2, 3', function () {
        assert.deepEqual(createObject(), { first: 1, second: 2, third: 3 });
    });
});

describe('#returnValueByKey', function () {
    it('given an object and a key, should return the value assigned to the key', function () {
        assert.equal(returnValueByKey({ 'a': 1, 'b': 2, 'c': 3}, 'a'), 1);
        assert.equal(returnValueByKey({ 'a': 1, 'b': 2, 'c': 3}, 'b'), 2);
        assert.equal(returnValueByKey({ 'a': 1, 'b': 2, 'c': 3}, 'c'), 3);
    });
});

describe('#assignKeyValue', function () {
    it('given an object, key, and value, add the key/value pair to the object. return the object', function () {
        assert.deepEqual(assignKeyValue({}, 'a', 1), { a: 1 });
        assert.deepEqual(assignKeyValue({}, 'b', 2), { b: 2 });
    });
});
