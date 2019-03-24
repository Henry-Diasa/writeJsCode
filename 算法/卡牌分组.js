// leetcode  914 
// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。
export default (arr) => {
    // 对这副牌进行排序，升序、降序都可以
    arr.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER
    let dst = []
    let result = true
    for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
      tmp.push(arr[i])
      for (let j = i + 1; j < len - 1; j++) {
        if (arr[i] === arr[j]) {
          tmp.push(arr[j])
        } else {
          if (min > tmp.length) {
            min = tmp.length
          }
          dst.push([].concat(tmp))
          tmp.length = 0
          i = j
          break
        }
      }
    }
    dst.every(item => {
      if (item.length % min !== 0) {
        result = false
        return false
      }
    })
    return result
  }
  