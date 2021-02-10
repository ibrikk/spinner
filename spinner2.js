let delay = 100;

const frames = ['|', '/', '-', '\\'];
const timeout = delay * frames.length;

const loopId = setInterval(() => {
  for(let i = 0; i < frames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${frames[i]}     `);
    }, delay * i);
  }
}, timeout);

setTimeout(() => {
  clearInterval(loopId);
  process.stdout.write('\n')
}, 3000);









// for (let i = 0; i < 100; i++) {
//   setTimeout(() => {
//     process.stdout.write('\r |   ');
//   }, x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r /   ');
//   }, 2 * x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r -   ');
//   }, 3 * x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r \\   ');
//   }, 4 * x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r |   ');
//   }, 5 * x + (i * 1000));
// }