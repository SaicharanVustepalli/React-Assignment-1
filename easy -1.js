function count_char(str, search) {
let count = 0;
for (const e of str) {
if (e == search) count++;
}
return count;
}
console.log(count_char("hello world", "l"));
