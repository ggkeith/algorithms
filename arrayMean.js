//Find mean for a given array


var findAverage = function (nums) {
	var i;
	var sum = 0;
	var len - nums.length;
	
	for (i = 0; i < len; i++) {
		sum += nums[i];
	}
	return sum / len;
}