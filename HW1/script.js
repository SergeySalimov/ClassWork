function cleanString(newString) {
  let str = newString;

  const cenzrBlock = {
    конь: '*****',
    столб: '*****',
  };

  for (const key in cenzrBlock) {
    str = str.split(key).join(cenzrBlock[key]);
  }
  return str;
}
console.log(cleanString('Моя мама мыла столб, на улице стоит конь'));