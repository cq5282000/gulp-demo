/**
 * test() 函数，匹配成功则返回boolean
 */

const regex1 = /hello/;
const result = regex1.test('hello');

// console.log(result);

/**
 * match() 函数，返回的是匹配到的
 * a{m,n} 表示连续出现a最少m次,最多n次
 * 量词表示
 */

const regex2 = /ab{2,5}c/;
const string2 = 'abc abbbc abbbbc abbbbbc abbbbbbc';
const result2 = string2.match(regex2);
// console.log(result2);

/**
 * [a,b,c]表示可以是a，也可以是b，也可以是c
 */
const regex3 = /a[123]b/g;
const string3 = 'a0b a1b a2b a3b a4b';
const result3 = string3.match(regex3);
// console.log(result3);

/**
 * -,范围表示方法[1-9a-zA-Z]
 * \d:表示数字
 * \D:除数字意外的字符
 * \w:数字，大小写字母，下划线
 * \W:就是[^0-9a-zA-Z_]
 * \s就是[ \t\v\n\r\f]
 * \S就是[^\t\v\n\r\f]
 */
const regex4 = /\d\D/g;
const string4 = '!dasa%sd*ted*)(1M';
const result4 = string4.match(regex4);
// console.log(result4);

/**
 * 惰性匹配:
 * 其中/\d{2,5}?/表示，虽然2到5次都行，当2个就够的时候，就不在往下尝试了。
 */
const regex5 = /\d{2,5}?/g;
const string5 = '123 1234 12345 123456';
const result5 = string5.match(regex5);
// console.log(result5);

/**
 * 多选匹配:
 */
const regex6 = /([01][0-9]|[2][0-3]):[0-5][0-9]/;
const string6 = '123 1234 12345 123456';
const result6 = string6.match(regex6);
// console.log(result6);
// console.log(regex6.test('23:59'));

/**
 * 位置匹配：位置匹配的是行的概念
 * g: 全局， m多行匹配
 */
const regex7 = /^|$/gm;
const string7 = 'I\nlove\njavascript';
const result7 = string7.replace(regex7, '#');
// console.log(result7);

/**
 * 文本框的内容只能是汉字、字母（大小写）、标点（逗号、顿号、句号、问号和感叹号，全角）、空格、#、*。
 * 对*的限制：每个块中*前面必须是一个非*的汉字或字母或#（不能*作为块的开头）。
 * 。 ？ ！ ， 、 ； ： “ ” ‘ ’ （ ） 《 》 〈 〉 【 】 『 』 「 」 ? ? 〔 〕 … — ～ ? ￥
 * var reg = /[]/;
 * \u4e00-\u9fa5
 * 汉字
 */
// const regex8 = /(?![\u4e00-\u9fa5，。？！ *#] )(?!^ )(?![，。？！* ]\*)^[\u4e00-\u9fa5a-zA-Z，。？！ *#]+$/g;
// const regex8 = /(?!.*[0-9])^[a-z]{6}$/g;
const reg = /(?!.*^ )(?!.* $)(?!.*([0-9]| \*|\u3002\*|^\*))(?!.*(# |#[a-z]|#[A-Z]|#[\u4e00-\u9fa5]|#\u3002|#$))^[a-zA-Z\u4e00-\u9fa5*# \u3002]+$/;
// console.log(reg.test('写s*测'));

const regex8 = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/;
var string8 = '123456789# ######';
// console.log(regex8.test(string8));

/**
 *
 */
const regex9 = /"[^"]*"/;
var string9 = '"acd"ef';
console.log(string9.match(regex9));
