function lengthCheck(idNumberArray) {
  if (idNumberArray.length < 13 || idNumberArray.length > 13) {
    return false;
  }
}

function characterCheck(idNumberArray) {
  for (let i = 0; i < idNumberArray.length; i++) {
    const numToChar = idNumberArray[i].charCodeAt();
    if (numToChar < 48 || numToChar > 57) {
      return false;
    }
  }
}

function dateCheck(idNumberArray) {
  const year = Math.floor(`${idNumberArray[0]}${idNumberArray[1]}`);
  const month = Math.floor(`${idNumberArray[2]}${idNumberArray[3]}`);
  const day = Math.floor(`${idNumberArray[4]}${idNumberArray[5]}`);
  const date = new Date(year, month - 1, day);

  if (date.getDate() !== day) {
    return false;
  }
  if (date.getMonth() + 1 !== month) {
    return false;
  }
}

function citizenshipChecker(idNumberArray) {
  if (idNumberArray[10] < 0 || idNumberArray[10] > 1) {
    return false;
  }
}

function luhnCheck(idNumberArray) {
  const arrayOddIndex = [];
  const arrayEvenIndex = [];

  for (i = idNumberArray.length - 1; i >= 0; i--) {
    if (i == 0 || i % 2 == 0) {
      arrayEvenIndex.push(idNumberArray[i]);
    }
    if (i % 2 == 1) {
      arrayOddIndex.push(idNumberArray[i]);
    }
  }

  for (j = 0; j < arrayOddIndex.length; j++) {
    arrayOddIndex[j] *= 2;
    const numToString = arrayOddIndex[j].toString();
    if (numToString.length > 1) {
      arrayOddIndex[j] = ~~numToString[0] + ~~numToString[1];
    }
  }

  let sum = 0;
  const finalArray = arrayEvenIndex.concat(arrayOddIndex);
  for (k = 0; k < finalArray.length; k++) {
    sum += ~~finalArray[k];
  }
  if (sum.toString()[1] !== "0") {
    return false;
  }
}

function isIdNumberValid(idNumber) {
  const idNumberArray = idNumber.split("");

  if (
    lengthCheck(idNumberArray) === false ||
    characterCheck(idNumberArray) === false ||
    dateCheck(idNumberArray) === false ||
    citizenshipChecker(idNumberArray) === false ||
    luhnCheck(idNumberArray) === false
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = { isIdNumberValid };
