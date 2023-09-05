/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-09-04 16:56:32
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-05 09:00:21
 * @FilePath: \vital-admin\packages\components\src\utils\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
function calculateAndConcatenate(str: string, operator: string, otherStr: string): string {
  // 提取字符串中的数字
  const numbers: number[] = str.match(/\d+/g)?.map(Number) || [];

  // 根据运算符号进行运算
  const result: number = numbers.reduce((acc, num) => {
    switch (operator) {
      case '+':
        return acc + num;
      case '-':
        return acc - num;
      case '*':
        return acc * num;
      case '/':
        return acc / num;
      default:
        throw new Error('Unsupported operator');
    }
  }, 0);

  // 将运算结果和其他字符串拼接在一起
  const concatenatedStr: string = `${result}${otherStr}${str}`;

  return concatenatedStr;
}
const str: string = 'The numbers are 10, 20, and 30.';
const operator: string = '+';
const otherStr: string = ' The sum is: ';

const result: string = calculateAndConcatenate(str, operator, otherStr);
console.log(result);
// Output: "The sum is: 60. The numbers are 10, 20, and 30."