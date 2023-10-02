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

    case "minute":
      return new Date().getMinutes();

    case "sec":
      return new Date().getSeconds();

    case "what is your name":
      return "my name is persnal assistant.";

    case "help":
      return "what help you will be want?";

    case "about":
      return "you are in the dashboard portal of the robotec. here you find many things like who will devlop, what services we have what will they work, how will they help you. enjoy your journey in the portal.";
    
    case 'service':
      return 'Go to the main menu, then click on services here you can found service that help you in regular life'

    case 'Home':
      return 'click on Home if you want to home page.'
      default:
      console.log("in else condition");
      return "good to see you";
  }
};
