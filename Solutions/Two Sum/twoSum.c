int* twoSum(int* nums, int numsSize, int target) {
    int i, j;
    int *returnSize = (int*)malloc(2*sizeof(int));  
    returnSize[0] = returnSize[1] = 0;
    
    for (i = 0; i < numsSize; i++) {
        for (j = i + 1; (j < numsSize && i != j); j++) {
            if (nums[i] + nums[j] == target) { 
                returnSize[0] = i;
                returnSize[1] = j;
            }
        }
    }
    
    return returnSize;
}