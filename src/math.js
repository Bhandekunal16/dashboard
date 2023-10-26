

export const math = (number, input) => {
  try {
    console.log(number, input);
    switch (number) {
      case (number = "table"):
        let one = input * 1;
        let two = input * 2;
        let three = input * 3;
        let four = input * 4;
        let five = input * 5;
        let six = input * 6;
        let seven = input * 7;
        let eight = input * 8;
        let nine = input * 9;
        let ten = input * 10;
        return { one, two, three, four, five, six, seven, eight, nine, ten };

      default:
        return "give me the number";
    }
  } catch (error) {
    return error;
  }
};

export const convertToBinary = (input) => {
  try {
    let binary = "";
    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i).toString(2);
      binary += padLeft(charCode, 8); 
    }
    return binary;
  } catch (error) {
    return error;
  }
};

export const convertToString = (input) => {
  try {
    let string = "";

    for (let i = 0; i < input.length; i += 8) {
      let binaryCode = input.substr(i, 8);
      let charCode = parseInt(binaryCode, 2);
      string += String.fromCharCode(charCode);
    }

    return string;
  } catch (error) {
    return error;
  }
};

function padLeft(str, length) {
  return "0".repeat(length - str.length) + str;
}

export const hexadecimalConvert = (input) => {
  try {
    const decimalNumber = parseInt(input);

    if (!isNaN(decimalNumber)) {
      const hexadecimalNumber = decimalNumber.toString(16);
      console.log(
        `Hexadecimal representation of number: 0x${hexadecimalNumber}`
      );
      return hexadecimalNumber;
    } else {
      const stringAsHex = [...input]
        .map((char) => char.charCodeAt(0).toString(16))
        .join("");
      console.log(`Hexadecimal representation of string: 0x${stringAsHex}`);
      return stringAsHex;
    }
  } catch (error) {
    return error;
  }
};

export const hexToString = (input) => {
  try {
    const cleanedHexString = input.replace(/^0x/, "");
    if (/^[0-9A-Fa-f]+$/.test(cleanedHexString)) {
      const decodedString = hexStringToAscii(cleanedHexString);
      console.log(`Decoded string: ${decodedString}`);
      return decodedString;
    } else {
      console.log("Invalid hexadecimal string.");
    }
  } catch (error) {
    return error;
  }
};

function hexStringToAscii(hexString) {
  try {
    const hexPairs = hexString.match(/.{1,2}/g);
    const asciiString = hexPairs
      .map((hex) => String.fromCharCode(parseInt(hex, 16)))
      .join("");
    return asciiString;
  } catch (error) {
    return error;
  }
}

export const calculation = (input) => {
  try {
    const output = eval(input);
    console.log(output);
    return output;
  } catch (error) {
    return error;
  }
};

export const octal = (input) => {
  try {
    if (typeof input === "number") {
      input = input.toString();
    }
    let octalNumber = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const octalChar = char.charCodeAt(0).toString(8);
      octalNumber += octalChar;
    }
    return octalNumber;
  } catch (error) {
    return error.message;
  }
};

export const octalToString = (input) => {
  try {
    const octalGroups = input.match(/.{1,3}/g);
    let resultString = "";
    octalGroups.forEach((octalGroup) => {
      const charCode = parseInt(octalGroup, 8);
      const char = String.fromCharCode(charCode);
      resultString += char;
    });
    return resultString;
  } catch (error) {
    return error.message;
  }
};

export const convertToScientificNotation = (input) => {
  console.log(input);
  const value = parseFloat(input);
  if (typeof value != "number") {
    return "Invalid input";
  }
  const scientificNotation = value.toExponential(2);
  return scientificNotation;
};
