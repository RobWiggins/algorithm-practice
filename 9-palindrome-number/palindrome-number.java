// import java.lang.StringBuilder;

class Solution {
    public boolean isPalindrome(int x) {
        String xStr = "" + x;

        String reversed = new StringBuilder(xStr).reverse().toString();

        return xStr.equals(reversed);

    }
}
