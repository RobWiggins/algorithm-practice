function isPalindrome(s: string): boolean {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

    console.log(str)

    let leftIdx = 0
    let rightIdx = str.length - 1

    while (leftIdx <= rightIdx) {
        if (str.charAt(leftIdx) !== str.charAt(rightIdx)) {
            return false
        }
        leftIdx++
        rightIdx--
    }

    return true

};