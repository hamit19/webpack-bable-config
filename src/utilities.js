export default function dividerFn(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number")
      reject("You should send numbers!");

    if (x === 0 || y === 0) reject("Send numbers that are greater than 0!");

    setTimeout(() => resolve(x / y), 3000);
  });
}
