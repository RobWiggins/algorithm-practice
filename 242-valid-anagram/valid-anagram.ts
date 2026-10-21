function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false
    }

    let remaining = []

    let str = s.split('')
    const tStrLength = t.length

    for (let i = 0; i < t.length; i++) {

        let charAt = str.indexOf(t[i])

        if (charAt !== -1) {
            str.splice(charAt, 1)
        }
    }

    return str.length === 0
};
