// let i = 0;

// while (i < 6) {
//   if (i === 3) {
//     break;
//   }
//   i = i + 1;
// }

// console.log(i);
// Expected output: 3



// let i = 0; // i bana diya loop ke bahar

// while (i < 6) {
//   if (i === 3) {
//     break;  // agar i == 3 toh loop chhod do
//   }
//   i = i + 1; // warna i ko 1 se badha do
// }

// // Yahan i = 3 ho chuka hai loop break hone se pehle
// console.log(i); // toh yeh print karega 3


//  continue kya karta hai?
//🔁 Loop ke current iteration ko skip kar deta hai, lekin loop chalu rehta hai aur next round me chala jaata hai.

// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//       continue;  // jab i = 2 hoga, us round ko skip karega
//     }
//     console.log(i);
//   }