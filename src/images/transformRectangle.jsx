function TransformRectangle (i)
{
  const card = document.getElementsByClassName("card")


  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  iconSvg.classList.add("frame_transform_rectangle");
  const transformRectanglePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );


  iconSvg.setAttribute('width', '1423.917');
  iconSvg.setAttribute('viewBox', '0 0 376.745 337.349');
  iconSvg.setAttribute('height', '1275.021');
  

  transformRectanglePath.setAttribute(
    'd',
    'M 12.401 49.077 h 347.396 c 44.556 90.1935 -120.9544 180.439 0 283.396 H 12.401 C -19.9058 223.6699 127.3933 136.0237 12.401 49.1954 z'
  );
  transformRectanglePath.setAttribute(
    'data-path-to',
    'M 12.401 49.077 h 347.396 c -0.5405 110.9762 0.1585 160.6015 0 283.396 H 12.401 C 12.5362 212.4743 12.5362 150.2679 12.401 49.1954 z'
  );
  transformRectanglePath.setAttribute('style', 'fill:white;stroke:#000;stroke-width:0;stroke-opacity:1');
  transformRectanglePath.classList.add('transform_rectangle');
  transformRectanglePath.classList.add('path-anim');

  iconSvg.appendChild(transformRectanglePath);
      
  return card[i].appendChild(iconSvg);
}

export default TransformRectangle