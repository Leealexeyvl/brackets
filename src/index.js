module.exports = function check(str, bracketsConfig) {
  let result = str.slice();
  let bracketsArray = [];
  let param;
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsArray.push(bracketsConfig[i].join(''));
  }

  while (bracketsArray.some(function(elem) {
    param = result.indexOf(elem);
    return result.indexOf(elem) != -1})) {
    result = result.replace(result.substring(param, param + 2), '');
  }

 return result.length == 0;
}
