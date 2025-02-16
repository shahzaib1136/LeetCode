/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let farthest = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false; // If we can't reach index i, return false
        farthest = Math.max(farthest, i + nums[i]); // Update the farthest reachable index
        if (farthest >= nums.length - 1) return true; // If we can reach the last index, return true
    }

    return false;
};
