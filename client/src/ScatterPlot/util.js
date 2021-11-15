
//@ts-check

function range (numberOfcluster) {
  const rangeOfCluster = Array.from({ length: numberOfcluster }, (_, i) => i );
  return rangeOfCluster;
}

function addHexColor(c1, c2) {
  const parseHex = (str) => parseInt(str, 16);
  const hex2str = (hex) => hex.toString(16);
  const hexSum = parseHex(c1) + parseHex(c2);
  let hexStr = hex2str(hexSum);

  if( hexSum > 0xffffff )
    return "ffffff"
  if( hexSum < 0x000000 )
    return "000000"

  while(hexStr.length < 6){ hexStr += '0' };

  return hexStr;
}

function addTenHex(c1) {
  return addHexColor(c1, '00000a');
}

function addXHex(number, c1) {
  let ans = c1;
  while(number--) {
    ans = addTenHex(c1);
  }
  return ans;
}
/**
 * @arg {Array<string>} listOfColors
 * @arg {number} numberOfColors
 *
 * @return {Array<string>}
 */
function palleteColor(listOfColors, numberOfColors) {
  const addBlack = (c1, number) => addHexColor(c1, addXHex(number, '000009'));
  const hex2str = (hex) => hex.replace('#', '');
  const str2Hex = (str) => str.replace(/^/, '#');
  const composeFunction = (item, number) => {
    const str = hex2str(item);
    const colorplus = addBlack(str, number);
    const colorAgain = str2Hex(colorplus);
    return colorAgain;
  };
  const lengthColors = listOfColors.length;

  const pallete = Array.from({ length: numberOfColors }, (_, i) => {

    const index = i % lengthColors;
    const repetition = Math.floor(i/lengthColors);
    const colorArray = listOfColors[index];

    return composeFunction(colorArray, repetition);
  });

  return pallete;

}

export { range, palleteColor };
