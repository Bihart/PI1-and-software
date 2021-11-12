function range (numberOfcluster) {
  const rangeOfCluster = Array.from({ length: numberOfcluster }, (_, i) => i );
  return rangeOfCluster;
}

function addHexColor(c1, c2) {
  const parseHex = (str) => parseInt(str, 16);
  const hex2str = (hex) => hex.toString(16);
  const hexSum = parseHex(c1) + parseHex(c2);
  if( hexSum > 0xffffff )
    return "ffffff"
  if( hexSum < 0x000000 )
    return "000000"
  return hex2str(hexSum);
}

function palleteColor(listOfColors) {
  const addBlack = (c1) => addHexColor(c1, '-00000aa');
  const hex2str = (hex) => hex.replace('#', '');
  const str2Hex = (str) => str.replace(/^/, '#');
  const pallette = listOfColors.map(item => hex2str(item))
                               .map(item => addBlack(item))
                               .map(item => str2Hex(item))
  return pallette;
}

export { range, palleteColor };
