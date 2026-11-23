function readBinaryWatch(turnedOn: number): string[] {
    const times: string[] = []

    function countOnes(num: number): number {
        let count = 0

        for (const bit of num.toString(2)) {
            if (bit === '1') {
                count++
            }
        }

        return count
    }

    for (let hour = 0; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            const lightsOn = countOnes(hour) + countOnes(minute)

            if (lightsOn === turnedOn) {
                const formattedMinute = minute.toString().padStart(2, '0')
                times.push(`${hour}:${formattedMinute}`)
            }
        }
    }

    return times
};