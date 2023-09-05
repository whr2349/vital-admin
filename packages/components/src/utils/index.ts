/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-09-04 16:56:32
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-05 08:48:53
 * @FilePath: \vital-admin\packages\components\src\utils\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
function processString(a: string, b: string | number, operator: string): string {
  // 提取a中的数字
  const numbers = a.split(/[^\d]/).map(Number)
  console.log(numbers)

  let result: number
  // 按照传入的运算符号进行运算
  switch (operator) {
    case '+':
      // eslint-disable-next-line no-case-declarations
      result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      return a.replace(/[^\d]/g, () => result.toString())
    case '-':
      // eslint-disable-next-line no-case-declarations
      result = numbers.reduce((accumulator, currentValue) => accumulator - currentValue, 0)
      return a.replace(/[^\d]/g, () => result.toString())
    default:
      return `Invalid operator: ${operator}`
  }
}

// 测试
console.log(processString('123', '456', '+')) // "123456"
// "Invalid operator: x"
// export { };
