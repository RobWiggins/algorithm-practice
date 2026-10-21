function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false
    }

    let remaining = []

    let str = s.split('')
    const tStrLength = t.length

    for (let i = 0; i < t.length; i++) {
        console.log('t[i]', t[i])

        let charAt = str.indexOf(t[i])

        console.log('charAt', charAt)

        if (charAt !== -1) {
            remaining.push(str[i])
            str.splice(charAt, 1)
        }
    }

    return str.length === 0
};
