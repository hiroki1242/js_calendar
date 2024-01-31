// 初期化
const args = process.argv.slice(2);

const option = {
  year : new Date().getFullYear(),
  month : new Date().getMonth() + 1,
}

// コマンドの設定
if (args.length > 0) {
  if (args.length === 2 && args[0] === '-m' && !isNaN(args[1]) && args[1] >= 1 && args[1] <= 12) {
    option.month = Number(args[1]);
  } else {
    throw new Error(`Invalid argument: ${args[1]}`);
  }
}

// カレンダーの出力
const firstDate = new Date(option.year, option.month - 1, 1);
const lastDate = new Date(option.year, option.month, 0);
let startDay = firstDate.getDay();

const startNum = firstDate.getDate();
const lastNum = lastDate.getDate();

console.log(`      ${option.month}月 ${option.year}`);
console.log(' 日 月 火 水 木 金 土');

process.stdout.write("   ".repeat(startDay));

for (let i=startNum; i <= lastNum; i++) {
  process.stdout.write(" " + i.toString().padStart(2, " "));
  startDay = (startDay + 1) % 7;
  if (startDay === 0) console.log('');
}

if (startDay !== 0) console.log('');
