"use strict";

function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const result = users.filter(users => users.gender === gender).map(users => users.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);
  return result;
}