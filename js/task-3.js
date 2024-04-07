function getElementWidth(content, padding, border) {
  const content1 = Number.parseFloat(content);
  const padding1 = Number.parseFloat(padding);
  const border1 = Number.parseFloat(border);
  const totalWidth = content1 + padding1 * 2 + border1 * 2;

  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
