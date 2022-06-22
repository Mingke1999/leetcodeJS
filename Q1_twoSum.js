/*
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumBruteForce = function(nums, target) {
    var number = [0,0];
    
    for(let i=0;i<nums.length-1;i++){
        for(let j= i+1;j<nums.length;j++){
            if( nums[i]+nums[j] == target){
               number[0] = i;
               number[1] = j;
               break;
             }
        } 
    }
    return number;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumHash = function(nums, target) {
    var number = [0,0];
    const hm = new Map(); //initial hash map
    for(let i=0;i<nums.length;i++){
        hm.set(nums[i],i);  //key : value
    }
    for(let i=0;i<nums.length;i++){
        var diff = target - nums[i]; //calculate difference
            if((hm.has(diff))&&(hm.get(diff)!=i)){
               number[0] = i;
               number[1] = hm.get(diff);
               break;
             }
        } 
    
    return number;
};

//map functions
const jsMap = new Map();
jsMap.set("key","value");
jsMap.get("key");
jsMap.set("key","another value");
jsMap.size;
jsMap.delete("key");