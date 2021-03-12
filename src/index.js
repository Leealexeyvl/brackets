// module.exports = function check(str, bracketsConfig) {
//   let result = str.slice();
//   let bracketsArray = [];
//   let param;
//   for (let i = 0; i < bracketsConfig.length; i++) {
//     bracketsArray.push(bracketsConfig[i].join(''));
//   }

//   while (bracketsArray.some(function(elem) {
//     param = result.indexOf(elem);
//     return result.indexOf(elem) != -1})) {
//     result = result.replace(result.substring(param, param + 2), '');
//   }

//  return result.length == 0;
// }

module.exports = function check(str, bracketsConfig) {
let config = {};
for (let item of bracketsConfig) {
  config[item[0]] = item[1];
}
let stack = [];
stack.push(str[0]);
for (let i = 1; i < str.length; i++) {
  if (str[i] === config[stack[stack.length - 1]]) {
    stack.pop();
  } else stack.push(str[i]);
}
if (stack.length === 0) return true;
return false;
}

