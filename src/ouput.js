import { math } from "./math";

export const output = (input, number) => {
  switch (input) {
    case "hello":
      console.log("in the if condition");
      return "Hello sir";

    case "null":
      return "good to see you";

    case "time":
      return new Date();

    case "date":
      return new Date().getDate();

    case "day":
      return new Date().getDay();

    case "year":
      return new Date().getFullYear();

    case "month":
      return new Date().getMonth();

    case "hour":
      return new Date().getHours();

    case  'minute':
      return new Date().getMinutes();

    case 'sec' :
      return new Date().getSeconds();

    default:
      console.log("in else condition");
      return "good to see you";
  }
};
