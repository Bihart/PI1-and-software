//@ts-check

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
/**
 * @arg {Array<string>} listOfColors
 * @arg {number} numberOfColors
 *
 * @return {Array<string>}
 */
function palleteColor(listOfColors, numberOfColors) {
  const addBlack = (c1) => addHexColor(c1, '-00000aa');
  const hex2str = (hex) => hex.replace('#', '');
  const str2Hex = (str) => str.replace(/^/, '#');
  const composeFunction = (item) => str2Hex(addBlack(hex2str(item)));
  const lengthColors = listOfColors.length;
  const realPallete = Array.from(
    { length: numberOfColors },
    (_, i) => composeFunction( i % lengthColors )
  );
  return realPallete;
}

export { range, palleteColor };
