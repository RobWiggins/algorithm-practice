function maxArea(height: number[]): number {
  
  let idx1 = 0
  let idx2 = height.length - 1

  let max = 0
  let sum = 0

  let left = 0
  let right = height.length - 1

  while (idx1 < idx2) {

    let lower = Math.min(height[idx1], height[idx2])
    let area = lower * (idx2 - idx1)

    if (area >= max) {
      max = area
    }

    if (height[idx1] <= height[idx2]) {
      idx1++
    } else {
      idx2--
    }
  }

  return max

};