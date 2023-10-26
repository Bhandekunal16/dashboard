
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

