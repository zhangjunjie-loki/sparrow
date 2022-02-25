export function drawRedRect(svg) {
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElementNS, 创建指定空间svg的元素
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', 0);
  rect.setAttribute('y', 0);
  rect.setAttribute('fill', 'red');
  rect.setAttribute('width', 100);
  rect.setAttribute('height', 100);
  svg.appendChild(rect);
}
