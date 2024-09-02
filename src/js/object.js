export default function orderBykeys(obj, order) {
  const result = [];
  order.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  });
  const anotherKeys = [];
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      !order.includes(key)
    ) {
      anotherKeys.push(key);
    }
  }
  anotherKeys.sort();

  anotherKeys.forEach((key) => {
    result.push({ key, value: obj[key] });
  });
  return result;
}
