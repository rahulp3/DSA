/*
Problem Description : 
Find the maximum sum of contiguous non-empty subarray within an array A of length N.

Problem Constraints : 
1 <= N <= 1e6
-1000 <= A[i] <= 1000

Input Format :
The first and the only argument contains an integer array, A.

Output Format :
Return an integer representing the maximum possible sum of the contiguous subarray.

Example Input : 
Input 1:
	A = [1, 2, 3, 4, -10] 

Input 2:
	A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 


Example Output :
Output 1:
	10 
Output 2:
	6 

Example Explanation :
Explanation 1:
	The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
Explanation 2:
	he subarray [4,-1,2,1] has the maximum possible sum of 6. 
*/

public class Solution {
    public int maxSubArray(final List<Integer> A) {
        //Kadene's Algorithm
        int ans = Integer.MIN_VALUE;
        int sum = 0;
        for(int i = 0 ; i < A.size() ; i++){
            sum = sum + A.get(i);
            if(sum > ans){
                ans = sum;
            }

            if(sum < 0){
                // When sum is less than 0 reset the carry forward sum to O
                sum = 0;
            }
        }

        return ans;
    }
}


