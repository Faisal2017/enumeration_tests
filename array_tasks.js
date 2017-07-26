var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		for (var item of arr1) {
			newArray.push(item)
		};
		for (var item of arr2) {
			newArray.push(item)
		};
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = [];

		for (var item of arr) {
			newArray.push(item ** 2);
		}
		return newArray;
	},

	sum: function (arr) {
		var total = 0;

		for (number of arr) {
			total += number;
		}
		return total;
	},

	// findDuplicates: function (arr) {
		
	// },

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];

		for (item of arr) {
			if (item != valueToRemove) {
				newArray.push(item);
			}
		}
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];

		for (i = 0; i < arr.length; i ++) {
			if (arr[i] === itemToFind ) {
				newArray.push(i)
			}
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;

		for (var item of arr) {
			if (item % 2 === 0) {
				total += (item ** 2);
			}
		}
		return total;
	}

}

module.exports = arrayTasks
