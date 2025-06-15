export const maxGroupLengthSum = (arr:Array<number>) => {
    const totalSum = arr.reduce((a, b) => a + b, 0);
    const n = arr.length;
    const map = new Map();
    arr.sort((a, b) => b - a); 
    const canPartition = (nums:number[], target:number, k:number, used:boolean[], start:number, currentSum:number) => {
      if (k === 0) return true;
      if (currentSum === target) {
        return canPartition(nums, target, k - 1, used, 0, 0);
      }
      for (let i = start; i < nums.length; i++) {
        if (used[i]) continue;
        if (currentSum + nums[i] > target) continue;
        used[i] = true;
        if (canPartition(nums, target, k, used, i + 1, currentSum + nums[i])) {
          return true;
        }
        used[i] = false;
        if (currentSum === 0) break; 
      }
      return false;
    };
    for (let target = 1; target <= totalSum; target++) {
      if (totalSum % target !== 0) continue;
      const groups = totalSum / target;
      const used = new Array(n).fill(false);
      if (canPartition(arr, target, groups, used, 0, 0)) {
          map.set(target, groups);
        }
    }
    let max = 1;
    for (let [, value] of map) {
      if (value > max) max = value;
    }
    return max;
  }
