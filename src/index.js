module.exports = function check(str, bracketsConfig) {
  while (str.length > 0){
    startLength = str.length
    for (let pair of bracketsConfig){
      //console.log(str, pair[0] + pair[1])
      str = str.replaceAll(pair[0] + pair[1],"")
      //console.log(str)

    }
    if (startLength === str.length){
      return false
    }
  }
  return true
}
