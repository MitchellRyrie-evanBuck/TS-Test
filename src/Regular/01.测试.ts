let title = "现在是2020年11月10日13点15分";
// 普通方式拿到上面一段文字中的数字
let time = [...title].filter((item) => !Number.isNaN(Number.parseInt(item)));
// 拿到数字
console.log(time.join(""));

// 使用正则获取数字,正则比上面的要简洁的多
let numbs = title.match(/\d/g);
console.log((<any>time).numbs.join(""));

// 打印结果完全相同
console.log(time.join("") === (<any>time).join("")); //true

