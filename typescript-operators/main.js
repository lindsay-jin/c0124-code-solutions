'use strict';
/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5 = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
v1 && console.log('v1 is truthy');
v2 && console.log('v2 is truthy');
const config1 = v1 || 'default-value';
const config2 = 'default-value' || v2;
console.log('config1', config1);
console.log('config2', config2);
//Assigns 'default-value' to a variable cfg1 only if v1 is undefined
const cfg1 = v1 ?? 'default-value';
console.log('cfg1:', cfg1);
//Assigns 'default-value' to a variable cfg2 only if v2 is undefined
const cfg2 = 'default-value' ?? v2;
console.log('cfg2:', cfg2);
//Assigns 'default-value' to a variable cfg3 only if v3 is undefined
const cfg3 = 'default-value' ?? v3;
console.log('cfg3:', cfg3);
// Assigns 'truthy' to a variable tern1 only if v1 is truthy, otherwise, assigns 'falsy'
const tern1 = v1 ? 'truthy' : 'falsy';
console.log('tern1:', tern1);
// Assigns 'truthy' to a variable tern2 only if v2 is truthy, otherwise, assigns 'falsy'
const tern2 = v2 ? 'truthy' : 'falsy';
console.log('tern2:', tern2);
// Assigns the value property of the v1 object to the variable oc1
const oc1 = v1?.value;
console.log('oc1:', oc1);
// Assigns the city property of the address property of the details property of the v5 object, to the variable oc2.
const oc2 = v5?.details?.address?.city;
console.log('oc2:', oc2);
//Copies the v1 object and adds a property foo with the value of 'bar', and assigns it to the variable sObj.
const sObj = { ...v1, foo: 'bar' };
console.log('sObj:', sObj);
//Copies the v4 array and adds the element 100 to the front of the array, and assigns it to the variable sArr.
const sArr = [100, ...v4];
console.log('sArr:', sArr);
