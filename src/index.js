module.exports = function check(str, bracketsConfig) {
  while (str.length > 0){
    startLength = str.length;
    for (let pair of bracketsConfig){
      str = str.replaceAll(pair[0] + pair[1],"");
    }
    if (startLength === str.length){
      return false;
    }
  }
  return true;
}
