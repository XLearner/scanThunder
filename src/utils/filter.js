/*
 * @Author: your name
 * @Date: 2021-11-08 23:40:24
 * @LastEditTime: 2021-11-08 23:51:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \scanThunder\src\utils\filter.js
 */
// 过滤点击格子周围的格子，返回为空的（周围没有雷的）格子
function filterEmptyItem (oButton) {
  let stack = [],
      result = [];
  stack.push(...oButton.aA);
  while(stack.length && !result.length) {
    let item = stack.shift();
    if (item.zi == "雷") {
      continue;
    } else if (item.zi !== 0) {
      stack.push(...item.aA);
    } else {
      result.push(item);
      break;
    }
  }
  return result[0];
}