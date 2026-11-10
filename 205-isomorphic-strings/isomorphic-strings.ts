function isIsomorphic(s: string, t: string): boolean {
    // if not same length, return false
    if (s.length !== t.length) {
        return false
    }

    const charMap = new Map()
    const usedTargets = new Set()

    for (let i = 0; i < s.length; i++) {
        let source = s[i]
        let target = t[i]

        if (charMap.has(source)) {
            if (charMap.get(source) !== target) {
                return false
            }
        } else {
            // A new source can only claim an unused target.
            if (usedTargets.has(target)) {
                return false
            }

            charMap.set(source, target)
            usedTargets.add(target)
        }
    }

    return true
}
