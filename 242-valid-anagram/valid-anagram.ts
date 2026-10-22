function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false
    }

    let remaining = []

    let sArr = s.split('')

    for (let i = 0; i < t.length; i++) {

        let charAt = sArr.indexOf(t[i])

        if (charAt !== -1) {
            sArr.splice(charAt, 1)
        }
    }

    return sArr.length === 0
};
