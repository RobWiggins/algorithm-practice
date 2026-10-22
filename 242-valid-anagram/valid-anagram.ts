function isAnagram(s: string, t: string): boolean {

    // if (s.length !== t.length) {
    //     return false
    // }

    // let remaining = []

    // let sArr = s.split('')

    // for (let i = 0; i < t.length; i++) {

    //     let charAt = sArr.indexOf(t[i])

    //     if (charAt !== -1) {
    //         sArr.splice(charAt, 1)
    //     }
    // }

    // return sArr.length === 0

    if (s.length !== t.length) {
        return false
    }

    const countT = new Map<String, number>()

    // build map that has each letter occurence

    for (const char of t) {
        if (countT.has(char)) {
            countT.set(char, countT.get(char) + 1)
        } else {
            countT.set(char, 1)
        }
    }

    for (const char of s) {
        if (countT.has(char)) {
            countT.set(char, countT.get(char) - 1)
        }
    }

    for (const [key, value] of countT) {
        if (value !== 0) {
            return false
        }
    }

    // let mapIter = countT.values()

    // while (mapIter.value !== null) {
    //     if (mapIter.value !== 0) {
    //         return false
    //     }
    //     mapIter = mapIter.next()
    // }



    return true
};
