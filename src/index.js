import dividerFn from "./utilities";

async function callDividerFn(x, y) {
  try {
    const result = await dividerFn(x, y);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

callDividerFn(200, 2);
